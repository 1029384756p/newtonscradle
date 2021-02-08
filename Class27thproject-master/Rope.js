class Rope{
    constructor(body1,pointB){
        var op = {
            bodyA: body1,
            pointB: pointB,
        }
        this.pointB = pointB;

   
        this.rope = Matter.Constraint.create(op);
        World.add(world,this.rope);
       }
       display(){
           var point1 = this.rope.bodyA.position;
           var point2 = this.pointB;
           stroke('white');

           strokeWeight(2);

           line(point1.x,point1.y,point2.x,point2.y);
           
       }
   
   }