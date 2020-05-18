# Spa Architecture

Данный репозиторий содержит описание архитектуры и рекомендации по проектированию SPA в компании "42 пикселя".

Помимо документации, репозиторий также содержит пример приложения, реализующего все ключевые идеи ```examples/react```.

В данный момент, демонстрационный пример реализован на стеке React + EffectorJS. Все листинги, приводимые ниже, также содержат код на React. 
В дальнейшем мы планируем релизовать  демонстрационный пример на VueJS, так как изложенная здесь архитектура по-большей части антагонистична к слою представления.

Для хорошего понимания требуется хотя бы поверхностное знакомство со стейт-менеджером  [Effector](https://effector.now.sh/docs/introduction/installation).

# Демо приложение

Демо приложение представляет собой простой не публичный (требуется вход) каталог товаров с возможностью добавления товаров в корзину. 

Все данные замоканы на клиенте, backend не требуется.

## Установка

```
$ cd examples/react
$ npm ci
$ cp .env.example .env
```

Запуск webpack dev server:
```
$ npm run start
```

Сборка production бандла:
```
$ npm run build
```
Запуск unit-тестов:
```
$ npm run test
```

## Вход 
```
42px
123
```

# Основные идеи

Любое клиентское приложение, в самом первом приближении состоит из следующих слоев:

1. Представление (компоненты и стили)
2. Состояние (пользовательский ввод и данные для вывода)
3. Слой взаимодействия с внешними источниками данных (RESTful API, GraphQL, клиенсткая СУБД, etc)

В зависимости от степени проработки архитектуры, фанатазии разработчиков, времени отведенного на проект, размера проекта и прочих факторов, данные слои могут быть склеены и перемешаны друг с другом практически любым образом. 

Ключевая идея описываемой архитектуры заключается в том, что все три указанных слоя отделены друг от друга и взаимодействуют только посредством определенного API.

## DAL 

Слой взаимодействия с внешними данными мы в дальнейшем будем называть DAL (Data Access Layer). 

Данный термин позаимствован из мира серверной разработки (если еще точнее - то из .NET). Однако, весьма удачно описывает роль этого слоя приложения. 

> Источники данных - вещь изменчивая. 

Всем знакома ситуация, когда даже на небольших промежутках времени в живом проекте меняется формат эндпоинтов HTTP-API, добавляются новые источники данных (например в дополнение к HTTP-API появляется socket.io соденинение, или сторонеее HTTP-API) и так далее. 

При этом, типы основных сущностей, как правило, обладает большей стабильностью, так как являются репрезентацией предментной области. 

Наша главная задача - минимизация числа изменений, которые нам потребуется внести при каких-либо изменениях внешних источников данных или их интерфейсов. 

Поэтому, все знание об источниках данных и их интерфейсах инкапсулирует DAL. 

Для внешнего приложения он предоставляет прозрачное API для получения и мутации данных (коллекция эффектов и эвентов)

Самое важное здесь в том, чтобы внешнее приложение ничего не знало даже о том, откуда эти данные приходят. Именно поэтому, соответствующий каталог в демонстрационном приложении назван именно dal, а не "rest-api" или "http". 

DAL может хранить внутри себя состояние, которое непосредственно относится к внешнему источнику данных, например токен аутентификации. 

Рассмотрим реализацию слоя DAL и его взаимодействие с остальным приложением на нашем демо примере. 

В каталоге ```dal/rest-api``` находится модель: 
1. стор ```$accessToken```
2. Cобытия для инициализации и перезагрузки состояния аутентификации initAuthState, resetAuthState
3. События для аутентификации и изменения токена authenticate и tokenChanged (на случай если нам понадобится поддерживать механизм рефреша)
4. Эффекты-обертки над http-запросами request и authRequest 

Вся основная логика расположена в [init.ts](examples/react/src/dal/rest-api/init.ts)


Данная схема является лишь одной из возможных. Конкретная реализация внутренностей слоя DAL и его API зависит от задач конкретного приложения, его источников данных и способов аутентификации и авторизации. 

Помимо методов для получения и мутации данных, слой DAL также может предоставлять внешнему приложению типы основных сущностей (в демо примере это ```src/dal/entities.ts```) и моки данных для тестирования. 

*Подытожим:*

1. Слой DAL предоставляет внешнему приложению абстрактное, не зависящее от источников данных и их интерфейсов API для получения и мутации данных, типы основных сущностей и моки 



## Состояние
### Иерархия состояния 
### Модель


## Представление
### Типы компонентов

# Feature Slices и структура директорий
# Стадия объявления и инициализации 
# Структура моделей
# Структура представлений
# Тестирование






















