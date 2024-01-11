export interface JavaList<E> extends Iterable<E> {
    add(e: E): boolean;
    add(index: number, element: E): void;
    remove(index: number): E | null;
    remove(o: E): boolean;
    get(index: number): E | null;
    set(index: number, element: E): E | null;
    contains(o: E): boolean;
    size(): number;
    isEmpty(): boolean;
    equals(o: unknown): boolean;
}
export interface JavaMap<K, V> extends Iterable<K> {
    put(key: K, value: V): V | null;
    remove(key: K): V | null;
    remove(key: K, value: V): boolean;
    replace(key: K, value: V): V | null;
    replace(key: K, oldValue: V, newValue: V): boolean;
    get(key: K): V | null;
    getOrDefault(key: K, defaultValue: V): V;
    size(): number;
    isEmpty(): boolean;
    equals(o: unknown): boolean;
}
export interface Seq<E> extends JavaList<E> {
}
export interface ObjectMap<K, V> extends JavaMap<K, V> {
}
