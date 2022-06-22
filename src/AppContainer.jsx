import React from 'react';
import { connect } from 'react-redux';
import { bigBangDisable, textIntroAC, skipIntroAC, closeThankPage, mainStartAC, onPreloderAC } from './redux/reducers/mainReducer';
import App from './App';


class AppContainer extends React.Component {

    componentDidMount() {

        class Vector2 {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
          
            set(x, y) {
                this.x = x;
                this.y = y;
                return this;
            }
          
            clone() {
                return new Vector2(this.x, this.y);
            }
          
            add(v) {
                this.x += v.x;
                this.y += v.y;
                return this;
            }
          
            sub(v) {
                this.x -= v.x;
                this.y -= v.y;
                return this;
            }
          
            mult(v) {
                this.x *= v.x;
                this.y *= v.y;
                return this;
            }
          
            magnitude() {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            }
          
            setFromScalarAngle(scalar, angle) {
                this.x = Math.cos(angle) * scalar;
                this.y = Math.sin(angle) * scalar;
            }
          }
          
          class Particle {
            constructor(canvas, x, y, scalar, direction, radius, color) {
                this.canvas = canvas;
          
                this.position = new Vector2(x, y);
          
                this.velocity = new Vector2();
                this.velocity.setFromScalarAngle(scalar, direction);
          
                this.radius = radius;
                this.color = color;
                this.range = 1000;
            }
          
            update() {
                this.position.add(this.velocity);
            }
          }
          
          window.onload = () => {
    
            this.props.onPreloderAC()
            this.props.mainStartAC()
            setTimeout(this.props.bigBangDisable, 19000)
            setTimeout(() => this.props.textIntroAC(0), 6000)
            setTimeout(() => this.props.textIntroAC(1), 10000)
            setTimeout(() => this.props.textIntroAC(2), 14000)
            setTimeout(() => this.props.textIntroAC(3), 18000)
            setTimeout(() => this.props.textIntroAC(-1), 22000)
            setTimeout(() => this.props.skipIntroAC(), 30000)

          
            let canvas = document.getElementById('bang'),
                ctx = canvas.getContext('2d'),
                width = canvas.width = window.innerWidth,
                height = canvas.height = window.innerHeight,
                particles = [],
                particleNum = 2000,
                colors = ["#ffffff", '#caba8c', '#cfccc7'];
          
            window.onresize = () => {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
            }
          
            function randomIntFromRange(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }
          
            function randomColor(colors) {
                return colors[Math.floor(Math.random() * colors.length)]
            }
          
            for (let i = 0; i < particleNum; i++) {
                particles.push(new Particle(
                    canvas,
                    canvas.width / 2,
                    canvas.height / 2,
                    Math.random() * 1 + 1,
                    Math.random() * Math.PI * 2,
                    randomIntFromRange(1, 2),
                    randomColor(colors),
                ));
            }
          
            function draw() {
                for (let i = 0; i < particleNum; i++) {
                    var p = particles[i];
                    p.update();
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2)
                    ctx.shadowBlur = 4;
                    ctx.globalAlpha = '1'
                    ctx.fillStyle = p.color;
                    ctx.fill();
                    ctx.restore() 
                }
            }
          
            function render() {
                ctx.fillStyle = 'rgba(0,0,0, .9)';
                ctx.fillRect(0, 0, width, height);
                requestAnimationFrame(render);
                return draw();
                
            }
          
            render();
          }

    }
 

    render() {
        return <App 
            bigBang={this.props.bigBang} 
            textIntro={this.props.textIntro}
            selectText={this.props.selectText}
            skipIntro={this.props.skipIntro}
            sendForm={this.props.sendForm}
            
            skipIntroAC={this.props.skipIntroAC}
            closeThankPage={this.props.closeThankPage}/>
    }
}

let mapStateToProps = (state) => {
    
    return {
        bigBang: state.main.bigBang,
        textIntro: state.main.textIntro,
        selectText: state.main.selectText,
        skipIntro: state.main.skipIntro,
        sendForm: state.main.sendForm
    }
}


export default connect(mapStateToProps, {
    bigBangDisable,
    textIntroAC,
    skipIntroAC,
    closeThankPage,
    mainStartAC,
    onPreloderAC
})(AppContainer)
