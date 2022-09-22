const fighter =  {
    name: 'Saul',
    health: 0,
    power: 0,
    psyche: 10,

    winner: true,


    atack: {
        shoot: 3,
        power: 10
    },

    recovery : 3,

 fight: function (){
    if( this.power === 0){
        console.log('Нужно восстановить силы')
     } else{
        this.atack.shoot-=1
        console.log('Бам-бам')
       
     }
    
 },
  
  relax: function(){
    if(this.health === 0){
        console.log('Не торопись,отдохни')
    } else{
        this.power = 10
        this.recovery-=1 
    }
     },

     Nocaut: function (){
        this.health = 0
        if(this.health===0){
            console.log('1,2,3,4,5,Всееееееееееееееее')
        }
      
     },

     act: function (){
        if(this.power === 0 && this.health === 0){
            this.psyche = 0
            console.log('Я неудачник')
        }
     },
   
     champion: function (){
      if( this.psyche === 0)  {
            this.winner = false
            console.log('Бой проигран')
        }
     }
   
     }



fighter.fight()
 console.log(fighter.atack.shoot)

 fighter.relax()
console.log(fighter.recovery)
fighter.Nocaut()
fighter.act()
fighter.champion()