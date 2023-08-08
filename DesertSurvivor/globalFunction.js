function updateInventory() {
    console.log("*** updateInventory()");
    this.inventory = {};
    this.inventory.heart = window.heart;
    this.inventory.bucket = window.bucket;

    console.log('*** updateInventory() Emit event', this.inventory);
    this.invEvent = (event, data) => {
        this.scene.get('showInventory').events.emit(event, data);
    };
    this.invEvent("inventory", this.inventory);
}

  function hitEnemy(player,enemy) {
    this.touchSound.play();
    console.log("*** enemy overlap nick");
   
    // Shake screen
   this.cameras.main.shake(100);

   window.heart--;
  enemy.disableBody(true, true);
  //this.updateInventory()
  updateInventory.call(this)

if (window.heart == 0){
  this.scene.start("gameOver");
  }
  
}
    
    
      
