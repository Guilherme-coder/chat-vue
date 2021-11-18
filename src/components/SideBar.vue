<template>
  <div class="side_bar">
      <div class="items">
        <item
            binary="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1717px-Tux.svg.png"
            name="Tux"
            lastMessage="Windows perdeu!!"
        />
        <item
            binary="https://static.cloud-boxloja.com/lojas/wyfyg/produtos/b5bd0f3c-e78f-4b38-b350-30ef0c54c337.jpg"
            name="Ubuntu"
            lastMessage="Sou uma das melhores!"
        />
      </div>
  </div>
</template>

<script>
import Item from '../components/Item'
export default {
    components: {
        'item': Item
    }
}
</script>

<style scoped>
    .side_bar {
        width: 25%;
        height: 100%;
        border-radius: 10px 4px 4px 10px;
        background-color: #131C21;
    }
    .items {
        padding-top: 30%;
        width: 100%;
        height: 89%;
    }
</style>