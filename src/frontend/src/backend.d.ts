import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface SocialLink {
    url: string;
    platform: string;
}
export interface Perfume {
    id: string;
    fragranceNotes: Array<string>;
    name: string;
    description: string;
    image: ExternalBlob;
}
export interface ContactInfo {
    email: string;
    address: string;
    phone: string;
}
export interface backendInterface {
    addPerfume(id: string, name: string, description: string, fragranceNotes: Array<string>, image: ExternalBlob): Promise<void>;
    addSocialLink(platform: string, url: string): Promise<void>;
    deletePerfume(id: string): Promise<void>;
    deleteSocialLink(platform: string): Promise<void>;
    getAllPerfumes(): Promise<Array<Perfume>>;
    getAllSocialLinks(): Promise<Array<SocialLink>>;
    getContactInfo(): Promise<ContactInfo>;
    getPerfume(id: string): Promise<Perfume>;
    setContactInfo(phone: string, email: string, address: string): Promise<void>;
    updatePerfume(id: string, name: string, description: string, fragranceNotes: Array<string>, image: ExternalBlob): Promise<void>;
    updateSocialLink(platform: string, url: string): Promise<void>;
}
