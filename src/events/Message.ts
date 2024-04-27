export class MessageEvent {
  constructor(
    public readonly text: string,
    public readonly from: string,
  ) {}
}
