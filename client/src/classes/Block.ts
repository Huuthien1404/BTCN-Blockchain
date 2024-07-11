import SHA256 from "crypto-js/sha256";

class Block {
  timestamp: string; // Thời gian tạo khối.
  transactions: any; // Các giao dịch trong khối.
  previousHash: string; // Hash của khối trước đó.
  hash: string; // Hash của khối hiện tại.
  nonce: number; // Một số ngẫu nhiên được sử dụng trong quá trình đào khối (mining) trong PoW, nhưng trong PoS, 
  //nó có thể không cần thiết lắm.
  validator: string; // Người xác nhận (validator) của khối.

  // Hàm khởi tạo này khởi tạo một đối tượng Block với các giá trị ban đầu cho timestamp, transactions, previousHash, và validator. 
  //Sau đó, nó tính toán giá trị hash cho khối và khởi tạo nonce bằng 0.

  constructor(
    timestamp: string,
    transactions: any,
    previousHash = "",
    validator = ""
  ) {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.hash = this.caculateHash();
    this.nonce = 0;
    this.validator = validator;
  }

  //Hàm này tính toán hash của khối bằng cách sử dụng các thuộc tính của khối như 
  //previousHash, timestamp, transactions, nonce, và validator. 
  //Kết quả của hàm SHA256 được chuyển đổi thành chuỗi và gán cho thuộc tính hash.

  caculateHash() {
    return SHA256(
      this.previousHash +
        this.timestamp +
        JSON.stringify(this.transactions) +
        this.nonce +
        this.validator
    ).toString();
  }
}

export default Block;
