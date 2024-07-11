import SHA256 from "crypto-js/sha256";
import elliptic from "elliptic";

class Transaction {
  fromAddress: string | null; // Địa chỉ ví gửi tiền, có thể là null (khi giao dịch từ hệ thống).
  toAddress: string | null; //  Địa chỉ ví nhận tiền.
  amount: number; // Số tiền giao dịch.
  signature: string; // Chữ ký của giao dịch.

  // Khởi tạo đối tượng Transaction với các giá trị đầu vào từAddress, toAddress, và amount. signature được khởi tạo là chuỗi rỗng.
   
  constructor(
    fromAddress: string | null,
    toAddress: string | null,
    amount: number
  ) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
    this.signature = "";
  }

  //Tạo hàm băm cho giao dịch dựa trên các thuộc tính fromAddress, toAddress và amount. Sử dụng SHA256 để tạo ra hàm băm.

  caculateHash() {
    if (this.fromAddress && this.toAddress)
      return SHA256(this.fromAddress + this.toAddress + this.amount).toString();

    return "";
  }

// Ký giao dịch bằng khóa riêng. Trước hết kiểm tra xem signingKey có khớp với fromAddress không. Nếu không khớp, ném ra một lỗi.
// Tính hàm băm của giao dịch và ký nó bằng khóa riêng (signingKey).
// Chữ ký được lưu trữ dưới dạng chuỗi hex.

  signTransaction(signingKey: any) {
    if (signingKey.getPublic("hex") !== this.fromAddress) {
      throw new Error("You cannot sign transactions for other wallets");
    }

    const hashTx = this.caculateHash();
    const sig = signingKey.sign(hashTx, "base64");
    this.signature = sig.toDER("hex");
  }

// Kiểm tra tính hợp lệ của giao dịch.
// Nếu fromAddress là null, coi giao dịch là hợp lệ.
// Nếu không có chữ ký hoặc chữ ký rỗng, ném ra một lỗi.
// Sử dụng ECC để xác minh chữ ký dựa trên hàm băm của giao dịch và chữ ký lưu trong đối tượng.

  isValid() {
    if (this.fromAddress === null) return true;

    if (!this.signature || this.signature.length === 0) {
      throw new Error("No signature in this transaction");
    }

    const ec = new elliptic.ec("secp256k1");
    const publicKey = ec.keyFromPublic(this.fromAddress, "hex");

    return publicKey.verify(this.caculateHash(), this.signature);
  }
}

export default Transaction;
