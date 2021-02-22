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
                            onChange={this.props.changeTitle} />
                    </Form>
                    <Form>
                        <TextArea className={styles.inputDesc}
                            value={this.props.desc}
                            onChange={this.props.changeDesc} />
                    </Form>
                    <Form className={styles.inputImg}>
                        {this.props?.file != null
                            ?
                            <img src={this.props.file} />
                            :
                            (this.props.index === 1 &&
                                <label>
                                    <text className={styles.fileButton} >+</text>
                                    <br />GÖRSEL
                                        <input type="file" accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={this.props.changeFile}>
                                    </input>
                                </label>
                            )
                        }
                    </Form>
                    <div>
                        {this.props.index === 1 &&
                            <Button className={styles.send} onClick={this.props.onButtonClick}
                                disabled={this.props?.file === null}
                            >Send</Button>}
                    </div>
                </Form>
            </div>
        )
    }
}


