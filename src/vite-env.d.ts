interface ImportMetaEnv {
  readonly VITE_GOOGLE_APPS_SCRIPT_URL: string;
  readonly [key: string]: string | boolean | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
