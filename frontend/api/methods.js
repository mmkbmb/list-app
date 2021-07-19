import Api from "./index";

export default {
  getItemsData() {
    return Api().get("/mydb");
  },

  createItem(itemName) {
    return Api().post("/create", {
      itemName: itemName
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  },

  getEditData(itemId) {
    return Api().get("/edit", {
      params: {
        itemId: itemId
      }
    })
  },

  updateItem(itemName, itemId) {
    return Api().post("/update", {
      itemName: itemName,
      itemId: itemId
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  },

  deleteItem(itemId) {
    return Api().post("/delete", {itemId: itemId})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};
