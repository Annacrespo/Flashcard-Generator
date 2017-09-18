var ClozeCard = function(front, back){
    this.front = front;
    this.back = back;
  }
function ClozeCard (text, cloze) {
    this.text;
    this.cloze;
    this.partial;
    this.fullText;
    
}
  ClozeCard.prototype.readCard = function() {
    console.log(this.front + " " + this.back);
  }

module.exports = ClozeCard;