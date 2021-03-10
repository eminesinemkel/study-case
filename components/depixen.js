import styles from './depixen.module.css'
import { Form, TextArea, Button } from "semantic-ui-react";
import React from 'react';

export default class Depixen extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <p className={styles.borderSmall}>New Title</p>
                <Form className={styles.borderBig}>
                    <Form>
                        <TextArea className={styles.inputTitle}
                            value={this.props.title}
                            onClick={ (e) => {
                                if(e.target.value === "New Title"){
                                    e.target.select();
                                  }
                            }}
                            onChange={this.props.changeTitle}/>
                    </Form>
                    <Form>
                        <TextArea className={styles.inputDesc}
                            value={this.props.desc}
                            onClick={ (e) => {
                                if(e.target.value === "New Description"){
                                    e.target.select();
                                  }
                            }}
                            onChange={this.props.changeDesc}/>
                    </Form>
                    <Form className={styles.inputImg}>
                        {this.props?.file != null
                            ?
                            <img src={this.props.file} className={styles.img} />
                            :
                            (this.props.index === 1
                                ?
                                (<label>
                                    <br /> <br />
                                    <text className={styles.fileButton} >+</text>
                                    <br />GÖRSEL
                                    <input type="file" accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={this.props.changeFile}>
                                    </input>
                                </label>
                                )
                                :
                                (<div className={styles.outputImg}></div>
                                )
                            )
                        }
                    </Form>
                    <div>
                        {this.props.index === 1 &&
                            <Button className={styles.send} onClick={this.props.onButtonClick}
                                disabled={this.props?.file === null}
                            ></Button>}
                    </div>
                </Form>
            </div>
        )
    }
}