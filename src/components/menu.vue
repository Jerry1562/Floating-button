<template>
    <div>
        <div id="main"
        v-on:mousedown="down"
        v-on:mouseup="up"
        v-on:mousemove="move"
        v-bind:style="positions"
        >X
        </div>
        <div  class="sub1" id="first" :style="subPosition" >
            <div  class="sub" id="second" :style="newPosition1"><div class="in">v</div></div>
            <div  class="sub" id="third" :style="newPosition2"><div class="in">v</div></div>
            <div  class="sub" id="four" :style="newPosition3"><div class="in">A</div></div>
            <div  class="sub" id="five" :style="newPosition4"><div class="in">A</div></div>    
            
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            /* 初始距离 */
            old_x:0,
            old_y:0,
            /* 初始位置 */
            init_x:0,
            init_y:0,
            /* 记录展开状态 */
            isOpen:true
        }
    },
    methods:{
        down(e){
            let main = e.target;
            this.$store.commit('update',{
                    x:e.clientX,
                    y:e.clientY
                });
            this.$store.commit('isDown',{
                isDown:true
            });    
            this.old_x = e.clientX - main.offsetLeft;
            this.old_y = e.clientY - main.offsetTop;
            /* 保存初始位置 */
            this.init_x = main.offsetLeft;
            this.init_y = main.offsetTop;
        },
        move(e){
            e.preventDefault();
            if(this.$store.state.isDown){
            this.$store.commit('update',{
                x:e.clientX,
                y:e.clientY
            });
            }
        },
        up(e){
            let main = e.target;
            this.$store.commit('isDown',{
                isDown:false
            });
            if(main.offsetLeft == this.init_x&&main.offsetTop == this.init_y){
                this.$store.commit('isOpen',{
                    isOpen:this.isOpen
                });
                this.isOpen = !this.isOpen;
            }
        }
    },
    computed:{
        positions(){
            return{
                left:this.$store.state.positionX - this.old_x + "px",
                top:this.$store.state.positionY - this.old_y + "px"
            }
        },
        isShow(){
            return this.$store.state.isOpen;
        },
        subPosition(){
            return{
                left:this.$store.state.positionX - this.old_x + 16 + "px",
                top:this.$store.state.positionY - this.old_y + 16 + "px"
            }
        },
        newPosition1(){
            if(this.$store.state.isOpen == true){
                return{
                    transform:"translate(4em,0em)"
                }
            }else{
                return{
                    transform:"translate(0em,0em)"
                }
            }
        },
        newPosition2(){
            if(this.$store.state.isOpen == true){
                return{
                    transform:"translate(-4em,0em)"
                }
            }else{
                return{
                    transform:"translate(0em,0em)"
                }
            }
        },
        newPosition3(){
            if(this.$store.state.isOpen == true){
                return{
                    transform:"translate(0em,4em)"
                }
            }else{
                return{
                    transform:"translate(0em,0em)"
                }
            }
        },
        newPosition4(){
            if(this.$store.state.isOpen == true){
                return{
                    transform:"translate(0em,-4em)"
                }
            }else{
                return{
                    transform:"translate(0em,0em)"
                }
            }
        },
    } 
}
</script>

<style scoped>
#main{
    position: fixed;
    /* border: 1px blueviolet solid; */
    transition: transform 1s;
    text-align: center;
    line-height: 4em;
    border-radius: 2em;
    box-shadow: 2px 2px 1px #888888;
    width: 4em;
    height: 4em;
    z-index: 2;
    cursor: pointer;
    background: blueviolet
}
.sub{
    position: absolute;
    /* border: 1px blueviolet solid; */
    text-align: center;
    transition:height 1s , width 1s , transform 1s;
    border-radius: 1em;
    width: 2em;
    height: 2em;
}
.in:hover{
    transform:rotate(360deg);
}
.in{
    border: 1px green solid;
    text-align: center;
    line-height: 2em;
    transition: transform 1s;
    border-radius: 1em;
    width: 2em;
    height: 2em;
}
.sub1{
    position: fixed;
    border: 1px blueviolet solid;
    border-radius: 1em;
    width: 2em;
    height: 2em;
    z-index: 1;
}
</style>
