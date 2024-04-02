import { z } from "zod";

const capitalized = z
  .string()
  .transform((data) => [data[0].toUpperCase(), data.slice(1)].join(""));

export const pokemonTypesEnum = z.enum([
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
  "unknown",
  "shadow",
]);

export type PokemonType = z.infer<typeof pokemonTypesEnum>;

export const typeSchema = z.object({
  name: pokemonTypesEnum,
  url: z.string().url(),
});

export const pokemonTypeSchema = z.object({
  slot: z.number(),
  type: typeSchema,
});

const spritesSchema = z.object({
  back_default: z.string().url().nullable(),
  back_female: z.string().url().nullable(),
  back_shiny: z.string().url().nullable(),
  back_shiny_female: z.string().url().nullable(),
  front_default: z.string().url().nullable(),
  front_female: z.string().url().nullable(),
  front_shiny: z.string().url().nullable(),
  front_shiny_female: z.string().url().nullable(),
});

export const pokemonSchema = z
  .object({
    id: z.number(),
    name: capitalized,
    height: z.number(),
    weight: z.number(),
    types: z.array(pokemonTypeSchema),
    sprites: spritesSchema,
  })
  .transform((data) => ({
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    types: data.types.map((type) => type.type.name),
    weaknesses: [] as PokemonType[], // TODO: calculate weaknesses
    image: data.sprites.front_default,
  }));

export type Pokemon = z.infer<typeof pokemonSchema>;

export type PokemonTypeSchema = z.infer<typeof pokemonTypesEnum>;

export const damageRelationSchema = z
  .object({
    double_damage_from: z.array(typeSchema),
    double_damage_to: z.array(typeSchema),
    half_damage_from: z.array(typeSchema),
    half_damage_to: z.array(typeSchema),
    no_damage_from: z.array(typeSchema),
    no_damage_to: z.array(typeSchema),
  })
  .transform((data) => ({
    doubleDamageFrom: data.double_damage_from.map((type) => type.name),
    doubleDamageTo: data.double_damage_to.map((type) => type.name),
    halfDamageFrom: data.half_damage_from.map((type) => type.name),
    halfDamageTo: data.half_damage_to.map((type) => type.name),
    noDamageFrom: data.no_damage_from.map((type) => type.name),
    noDamageTo: data.no_damage_to.map((type) => type.name),
  }));
