import * as SQLite from "expo-sqlite"

const DB_NAME = "shopkeeper"

let db: SQLite.SQLiteDatabase | null = null

export const getDB = async () => {
    if (!db) {
        db = await SQLite.openDatabaseAsync(DB_NAME)
    }
    return db
}

export const createProductTable = async () => {
    const db = await getDB()

    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS PRODUCTS (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            price TEXT NOT NULL,
            units TEXT NOT NULL,
            description TEXT NOT NULL,
            created_at DATETIME DEFAULT (datetime('now')),
            modified_at DATETIME DEFAULT (datetime('now')),
            image TEXT NULL
        )
    `)
}

export const getAllProducts = async () => {
    const db = await getDB()

    await db.getAllAsync(
        `SELECT * FROM PRODUCTS ORDER BY created_at DESC`
    )
}
