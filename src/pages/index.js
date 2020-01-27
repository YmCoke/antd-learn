import React, { useState, useCallback } from 'react'
import { Button, Icon, Typography } from 'antd'

const { Paragraph } = Typography;
console.log(Typography);

export default function index() {
    const [txt, setTxt] = useState("Ant Designer");
    const paragraphCallback = useCallback(str => {
        setTxt(str);
    }, [])
    return (
        <div>
            <h1>首页</h1>
            <Button type="primary"><Icon type="github" style={{ fontSize: '1.2em' }} />github</Button>
            <br /><br />
            <Button.Group>
                <Button type="danger">
                    <Icon type="left" />
                    左
                </Button>
                <Button type="dashed">
                    右
                    <Icon type="right" />
                </Button>
            </Button.Group>
            <br /><br />
            <Paragraph copyable={{ text: txt }} editable={{ onChange: paragraphCallback }}>{txt}</Paragraph>
        </div>
    )
}
