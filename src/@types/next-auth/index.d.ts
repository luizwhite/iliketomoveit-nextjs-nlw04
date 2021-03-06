interface GenericObject {
  [key: string]: any;
}

declare module 'next-auth/client' {
  declare function signin(
    provider?: string,
    data?: GenericObject & {
      callbackUrl?: string;
      redirect?: boolean;
    },
    additionalParams?: GenericObject,
  ): Promise<void>;

  declare const signIn: typeof signin;
}

export {};
