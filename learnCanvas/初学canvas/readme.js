/**
 * canvas兼容到IE9
 * 1、getContext('2d')获得画布的上下文环境
 * 以下方法全是ctx的方法
 * 2、fillRect() 填充矩形，(起点x坐标，起点Y坐标，宽，高)
 * 3、fillStyle='颜色值';填充颜色
 *    fill()绘制
 * 4、beginPath()开始绘制
 * 5、closePath()自动封闭
 * 6、arc(圆心x坐标，圆心Y坐标，半径，起始角，结束角，[顺时针false/逆时针true])
 * ctx.arc(200,200,100,0,Math,PI*2,true)
 * 二、笔触和填充
 * canvas能够产生颜色的两个东西，笔触（描边）&填充
 * 1、strockRect(x,y,宽，高); 只画出区域不进行填充
 * 2、moveTo();将画笔移动到一个位置
 * 3、lineTo()用画笔去画，此时是抽象的一个线，没有显示
 * 4、stroke();真正的画线
 * strokeStyle=''线条颜色
 * 5、fillStyle='red'调整颜色
 * 6、fill();填充
 * 
 * 三、弧和圆形
 * 弧也是笔触
 * 1、arc(圆心x,圆心y,半径，起始弧度，终止弧度，顺时针false/逆时针true)
 * 一定要注意，canvas中的角度是弧度制
 * 弧度制：在一个圆形饼中，切下一块，让弧度边长等于圆的半径，此时无论圆形多大，切下来的角度都是固定的
 * 都约等于57.29度(180/π),称为1弧度，基座1rad
 * 角度制和弧度制换算公式：360° = 2PIrad 
 * 一个完整的圆周，有2PI个弧度，大约6点多个饼
 * 正方向是向下向右的
 * 2、贝塞尔曲线
 * 普通的
 *  quadraticCurveTo(提升x，提升y,落点x,落点y)
 * 二次贝塞尔曲线
 *  bezierCurveTo()
 * 
 * 四、运动
 * 让元素在canvas上运动起来，需要使用setInterval()
 * cavnas使用了一个特殊的模式，上屏的元素，立刻被像素画，也就是说，上屏幕的元素，你将得不到这个
 * “对象”。
 * 一个圆形画到了ctx上面，此时就是一堆像素点，不是一个整体的对象了。
 * 没有任何变量能够获得这个圆形，改变他的x，y;
 * 只能重画
 * 
 * 所以canvas有一个机制，叫做上屏幕的元素，是不能改变形状、位置的，想要产生运动
 * 必须重新画。
 * canvas中的所有元素都是每帧重绘的
 * 清屏： clearRect(清屏起点x，清屏起点y,清屏宽，清屏高)
 * 
 * 注意：不管页面上有几个元素在运动，一定只有一个定时器，定时器负责每帧清平一次，然后
 * 重绘，难以维护多个状态信息
 * 五、上升到面向对象
 * 不要用全局变量来维护小球的x,y,r,speed信息
 * 
 * 
 * 
 * 
 */