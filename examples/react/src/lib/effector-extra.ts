import {
  Effect, attach, createEffect,
} from 'effector'

export function attachWrapper<AttachP, AttachD, AttachF, P, D, F>({
  effect,
  mapParams,
  mapResult,
  mapError,
}: {
  effect: Effect<P, D, F>;
  mapParams: (params: AttachP) => P;
  mapResult: ({ params, result }: {params: P; result: D}) => AttachD;
  mapError: ({ params, error }: {params: P; error: F}) => AttachF;
}): Effect<AttachP, AttachD, AttachF>
export function attachWrapper<AttachP, AttachD, P, D, F>({
  effect,
  mapParams,
  mapResult,
}: {
  effect: Effect<P, D, F>;
  mapParams: (params: AttachP) => P;
  mapResult: ({ params, result }: {params: P; result: D}) => AttachD;
}): Effect<AttachP, AttachD, F>
export function attachWrapper<AttachP, AttachF, P, D, F>({
  effect,
  mapParams,
  mapError,
}: {
  effect: Effect<P, D, F>;
  mapParams: (params: AttachP) => P;
  mapError: ({ params, error }: {params: P; error: F}) => AttachF;
}): Effect<AttachP, D, AttachF>
export function attachWrapper(args: any): any {
  return attach({
    mapParams: (originalParams) => args.mapParams(originalParams),
    effect: createEffect({
      handler: (params: any) => {
        let promise: any = args.effect(params)
        if (args.mapResult) {
          promise = promise.then((result: any) => args.mapResult({ params, result }))
        }
        if (args.mapError) {
          promise = promise.catch((error: any) => {
            throw args.mapError({ params, error })
          })
        }
        return promise
      },
    }),
  })
}