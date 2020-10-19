const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
      console.log(`Adding ${itemName} to inventory`);
      this.items.push(itemName);
      
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
for (const item of this.items ) {
    this.items = this.items.filter(item => item !== itemName);
}
    
    },
  invokeInventoryAction(itemName, action) {
      console.log(`Invoking action on ${itemName}`);
  const bindAction = action.bind(this)    
  bindAction(itemName);
}
};



inventory.invokeInventoryAction('Medkit', inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

inventory.invokeInventoryAction('Gas mask', inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']