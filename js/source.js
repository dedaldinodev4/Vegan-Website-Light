
//**  LocalStorage **//

//* Data *//

const StorageCtrl = (function(){

    return {
        storageItem: function(item){
            let items = [];

            if(localStorage.getItem('items') === null){
                items = [];

                items.push(item);

                localStorage.setItem('items', JSON.stringify(items));

            }else{


                items = JSON.parse(localStorage.getItem('items'));

                items.push(item);

                localStorage.setItem('items', JSON.stringify(items));
            }
        },

       
        getItemsFromStorage: function(){

            let items ;

            if(localStorage.getItem('items') === null){
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }

            return items;
        }
    }
})();

const ItemCtrl = (function(StorageCtrl){

    const Item = function(id, name,price, id_cliente){
        this.id     = id;
        this.name   = name;
        this.price  = price;
        this.amount = 1;
        this.id_cliente = id_cliente;
    }
  
    const dataStructure = {
        items: StorageCtrl.getItemsFromStorage()
  }

  return {
    getItems: function(){
        return dataStructure.items;
    },

    addItem: function(id,id_cliente, name,price){

        //* Create Item *//
        new_item = new Item(id, name,price, id_cliente);

            if(this.getItemById(id) != null){
                dataStructure.items.forEach((item, index) => {
                    if(item[index].items[0].id === id) {
                        item.amount += 1; 
                    }
                });
            } else {
                dataStructure.items.push(new_item);
                StorageCtrl.storageItem(dataStructure);
            }
            
        

        StorageCtrl.storageItem(dataStructure);
        return new_item;
        
    },

    getItemById: function(id){
        let found  = null;


        dataStructure.items.forEach(item =>{
            if(item.id ===  id){
                found = item;
            }
        });
        return found;
    },
    getLogData: function(){
        return dataStructure;
    }

  }

})(StorageCtrl);



 
const UICtrl = (function(){
    const UISelecctor = {
        itemId: '#id-cont',
        itemCollection : '.collection-item',
        addBtn: '#add-prod' 
    }
  
    return {
        getSelectors: function(){
          return UISelecctor;
        },
        getItemData: function(){
            return {
                id: document.querySelector(UISelecctor.itemId).textContent,
                name: document.querySelector(UISelecctor.itemName).textContent,
                cost: document.querySelector(UISelecctor.itemCost).textContent,
                price: document.querySelector(UISelecctor.itemPrice).textContent
            }
        }
    }
  
})();


const App = (function(ItemCtrl,StorageCtrl ,UICtrl){

    const loadLeteners = function(){

        const UISelectors = UICtrl.getSelectors();

        $('.add-prod').click(itemAddList);


    }

    const itemAddList = function(e) {

        let details_id  = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

        let details = details_id.querySelector(".detals-price");

        const detailsItems = details.getElementsByClassName('collection-item');

        let id = details.id;

        id = id.split('-');
        id = id[1];

        const name = detailsItems[1].textContent;
        let price = detailsItems[0].textContent
        const id_cliente = detailsItems[2].textContent

        price = price.split(' ')
        price = parseFloat(price[1])
    
        
        new_item = ItemCtrl.addItem(id,id_cliente,name, price);

       


        e.preventDefault();
    }



    return {
        init: function(){

            loadLeteners();
        }
    }
})(ItemCtrl,StorageCtrl ,UICtrl);

App.init();






