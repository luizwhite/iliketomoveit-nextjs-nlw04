interface Data {
  url: string;
}

declare module 'next-auth/client' {
  declare function signout(data?: {
    callbackUrl?: string;
    redirect?: boolean;
  }): Promise<Data>;

  declare const signOut: typeof signout;
}

export {};
