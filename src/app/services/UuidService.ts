export class UiidService {
  generate(): string {
    return crypto.randomUUID();
  }
}
