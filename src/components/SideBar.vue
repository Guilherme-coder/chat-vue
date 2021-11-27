<template>
  <div class="side_bar">
      <div class="items">
          <item v-for="item in this.items" :key="item.binary"
                :binary="item.binary"
                :name="item.name"
                :lastMessage="item.lastMessage"
          />
      </div>
  </div>
</template>

<script>
import Item from '../components/Item'
export default {
    data() {
        return {
            items: [
                        {
                            binary: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1717px-Tux.svg.png',
                            name: 'Tux',
                            lastMessage: 'Você perdeu  Windows'
                        },
                        {
                            binary: 'https://static.cloud-boxloja.com/lojas/wyfyg/produtos/b5bd0f3c-e78f-4b38-b350-30ef0c54c337.jpg',
                            name: 'Ubuntu',
                            lastMessage: 'Sou melhor que o Windows'
                        },
                        {
                            binary: 'https://seeklogo.com/images/Z/zorin-os-logo-B427B2B617-seeklogo.com.png',
                            name: 'Zorin OS',
                            lastMessage: 'Imagine eu.'
                        }
                    ]
        }
    },
    components: {
        'item': Item
    }
}
</script>

<style scoped>
    .side_bar {
        width: 25%;
        height: 100%;
        border-radius: 10px 0px 0px 10px;
        background-color: #131C21;
    }
    .items {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30%;
        width: 100%;
        height: 89%;
    }
</style>