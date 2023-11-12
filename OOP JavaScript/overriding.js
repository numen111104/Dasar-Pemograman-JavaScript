class MailService {

    constructor(sender) {
        this.sender = sender;
    }


    sendMessage(message, receiver) {
        console.log(`This ${message} has been sent by ${this.sender} to ${receiver}`);
    }
};

class whatsappBussines extends MailService {
    constructor(sender, isBusiness) {
        // overriding properti menggunakan methode super
        super(sender);
        this.isBusiness = isBusiness;
    }


    sendMessage(message, receiver) {
        // Overriding methodenya
        console.log(`This ${message} has been sent by ${this.sender} to ${receiver} via WhatsApp`)
        //Bisa juga pakai super methode
        /* super.sendMessage(message,receiver){
             console.log(`This ${message} has been sent by ${this.sender} to ${receiver} via WhatsApp`)*/
    }
 };

 const WA = new whatsappBussines("+62836472739743", true);
 
 


//  Ketika kita memanggil properti super class untuk di overriding maka kita perlu menggunakn methode super()