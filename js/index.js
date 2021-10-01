$(document).ready(function () {
    const lista = $("#Lista");

    
    $(".agregar").click((x) => {
      x.preventDefault();
      const itemText = $("#newText").val();
  
      if (itemText == "") return;
      const id = Math.floor(Math.random() * 9999);
      


      const newItem = `<div id="item-${id}" class="item">
          <h1 class="title">${itemText}</h1>
          <div class="button-row">
              <button id="${id}" class="check-btn btn">Check</button>
              <button id="${id}" class="delete-btn btn">Delete</button>
          </div>
      </div>`;
  
      
      lista.append(newItem);
    });

    $(document).on("click", ".delete-btn", (x) => {
      const id = `#item-${x.target.id}`;

      $(id).remove();
    });
  
    $(document).on("click", ".check-btn", (x) => {
        const item = `#item-${x.target.id}`;
        const title = $(item).find("h1");
      
      
      if (!title.attr("checked")) {
        title.css("textDecoration", "line-through");
        title.attr("checked", true);

      } else {
        title.attr("checked", false);
        title.css("textDecoration", "none");
      }
    });
  
    
  });