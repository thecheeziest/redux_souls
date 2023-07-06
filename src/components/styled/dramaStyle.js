import styled from 'styled-components'

// dramaWrap
export const DramaWrap = styled.div`
width: 100%;
min-height: 125vh;
background: rgb(92,70,156);
background: radial-gradient(circle, rgba(92,70,156,1) 0%, rgba(52,42,112,1) 51%, rgba(12,19,79,1) 100%);
`

// dramaHome
export const DramaHome = styled.div`
.inner {
    padding: 100px 0;
    box-sizing: border-box;
    h1 {
        font-size: 35px; font-weight: 700; text-align: center; margin-bottom: 70px; color: #D4ADFC;
    }
    .click {
        font-size: 50px; text-align: center; font-weight: 700;
        margin-top: 200px;
        &.on { display: none }
    }
    > ul {
        width: 1600px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        li {
            width: 200px; height: 260px;
            text-align: center;
            background: #5C469C;
            border: 1px solid #2b1b5b;
            padding: 0 5px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            &::after {
                display: block;
                width: 30px; height: 30px;
                border-radius: 50%;
                position: absolute;
                top: -10px; left: -10px;
                border: 5px solid #5C469C;
                background: #FFF;
                color: #1D267D;
                font-weight: 900;
                content: attr(data-id);
            }            
            .pic {
                width: 180px; height: 180px; border-radius: 10px;
                cursor: pointer;
                overflow: hidden; margin: auto;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
                &:hover {border: 5px solid #D4ADFC;}
                img {width: 220px; transform: translate(-10%, -10%);}
            }
            p {font-size: 24px; font-weight: 600; color: #D4ADFC; margin-bottom: 15px; text-shadow: 1px 4px 6px #5f2f8f;}
        }
    }
}
`

// dramaInfo
export const DramaInfo = styled.div`
width: 1400px;
margin: 20px auto;
display: flex;
justify-content: space-around;
.left {
    width: 480px; height: 615px;
    padding: 20px 15px;
    box-sizing: border-box;
    background: #D4ADFC;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    .pic-box {
        img {border-radius: 10px;}
        .big-img {
            img {width: 450px; height: 450px;}
            margin-bottom: 10px;
        }
        .thum {
            img {
                width: 100px;
                cursor: pointer;
                margin-right: 10px; border: 5px solid #5C469C;
                &:hover {border: 5px solid #1D267D;}
            }
        }
    }
}
.right {
    width: 800px; height: 615px;
    margin-bottom: 50px;
    border: 3px solid #5C469C;
    background: #0C134F;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    > ul {
        display: flex;
        justify-content: space-between;
        padding: 0 30px;
        li {
            width: 160px;
            height: 50px;
            margin: 30px 0;
            background: #5C469C;
            font-size: 25px;
            font-weight: 700;
            border-radius: 10px;
            text-align: center;
            line-height: 50px;
            color: #f6e2ff;
            text-shadow: 1px 4px 6px #5f2f8f;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            cursor: pointer;
            &.on {
                background: #D4ADFC;
                color: #0C134F;
                text-shadow: 1px 2px 5px #757fd7;
            }
        }
    }
    .con {
        width: 750px;
        margin: auto;
        padding: 0 30px;
        box-sizing: border-box;
        font-size: 20px;
        color: #8e74dd;
        h3 {
            font-size: 50px;
            font-weight: 700;
            color: #D4ADFC;
            margin: 10px 0;
        }
        a {
            display: block;
            font-size: 30px;
            color: #D4ADFC;
            font-weight: 700;
        }
        em {
            display: block;
            font-weight: 700;
            margin: 20px 0;
            margin-bottom: 40px;
            position: relative;
            color: #be7dff;
            &::after {
                display: block;
                content: "";
                width: 735px; height: 1px;
                background: #D4ADFC;
                position: absolute;
                top: 170%; left: -50%;
                transform: translateX(44%);
            }
        }
        .none::after {
        display: none;
        }
        > strong {
            display: block;
            font-size: 25px;
            color: #D4ADFC;
            font-weight: 700;
            margin-top: 50px;
            margin-bottom: 10px;
        }
        ul {
            margin-left: 10px;
            margin-top: 20px;
            li {
                strong {font-weight: 700; display: block; margin-top: 20px; }
            }
        }
    }
}
`