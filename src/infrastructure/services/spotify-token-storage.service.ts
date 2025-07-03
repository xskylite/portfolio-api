import { promises as fs } from "fs";
import path from "path";

const TOKEN_PATH = path.resolve("storage/spotify_token_storage.json");

export interface TokenStorage {
  access_token: string;
  refresh_token: string;
}

export const SpotifyTokenStorage = {
  async read(): Promise<TokenStorage> {
    const file = await fs.readFile(TOKEN_PATH, "utf-8");
    return JSON.parse(file);
  },

  async write(tokens: TokenStorage): Promise<void> {
    await fs.writeFile(TOKEN_PATH, JSON.stringify(tokens, null, 2), "utf-8");
  },
};