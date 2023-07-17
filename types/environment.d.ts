//src/types/environment.d.ts

export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GOOGLE_CLIENT_ID: string
            GOOGLE_CLIENT_SECRET: string
            NEXTAUTH_SECRET: string
            DATABASE_URL: string
        }
    }
}
