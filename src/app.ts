enum MessageType {
  SMS,
  Email,
  Gmail,
  IMessage,
}

interface ISendProvider {
  Send(): void;
}
class SendProvider implements ISendProvider {
  private type: MessageType;
  constructor(Type: MessageType) {
    this.type = Type;
  }
  Send(): void {
    switch (this.type) {
      case MessageType.SMS:
        var service = SendMessage.getInstance();
        service.Send();
        break;
      case MessageType.Email:
        var service = SendEmail.getInstance();
        service.Send();
        break;
      case MessageType.Gmail:
        var service = SendGmail.getInstance();
        service.Send();
        break;
      case MessageType.IMessage:
        var service = SendMessage.getInstance();
        service.Send();
        break;
      default:
        console.log("Default ....");
        break;
    }
  }
}

class SendMessage implements ISendProvider {
  private static instance: SendMessage;
  private constructor() {}
  static getInstance = () => {
    if (this.instance) return this.instance;
    this.instance = new SendMessage();
    return this.instance;
  };
  Send(): void {
    console.log("Send SMS => ");
  }
}
class SendEmail implements ISendProvider {
  private static instance: SendEmail;
  private constructor() {}
  static getInstance = () => {
    if (this.instance) return this.instance;
    this.instance = new SendEmail();
    return this.instance;
  };
  Send(): void {
    console.log("Send Email => ");
  }
}
class SendGmail implements ISendProvider {
  private static instance: SendGmail;
  private constructor() {}
  static getInstance = () => {
    if (this.instance) return this.instance;
    this.instance = new SendGmail();
    return this.instance;
  };
  Send(): void {
    console.log("Send Gmail => ");
  }
}
class SendIMessage implements ISendProvider {
  private static instance: SendIMessage;
  private constructor() {}
  static getInstance = () => {
    if (this.instance) return this.instance;
    this.instance = new SendIMessage();
    return this.instance;
  };
  Send(): void {
    console.log("Send IMessage => ");
  }
}

var provider = new SendProvider(MessageType.SMS);
provider.Send();
