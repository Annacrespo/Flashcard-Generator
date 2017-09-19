function ClozeCard (text, cloze) {
    this.text;
    this.cloze;
    this.partial = text.replace(this.cloze, "...");
    
}
  ClozeCard.prototype.readCard = function() {
    console.log(this.front + " " + this.back);
  }

module.exports = ClozeCard;

