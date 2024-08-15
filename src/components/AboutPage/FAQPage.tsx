"use client"
import React from 'react';
import { Collapse } from "antd";
import { CaretRightOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons';
import styles from "./faqpage.module.css"
import HeroSectionCard from '../HomePage/HeroSectionCard';
const { Panel } = Collapse;


const FAQPage = () => {
    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

    const items = [
        {
            key: '1',
            label: 'What is CRM Software?',
            children: <p className='list_content'>{text}</p>,
        },
        {
            key: '2',
            label: 'What advantages does CRM software offer?',
            children: <p className='list_content'>{text}</p>,
        },
        {
            key: '3',
            label: 'What are the standout features of Wortal CRM?',
            children: <p className='list_content'>{text}</p>,
        },
        {
            key: '4',
            label: 'What makes Wortal CRM unique compared to other platforms?',
            children: <p className='list_content'>{text}</p>,
        },
        {
            key: '5',
            label: 'Why should my team consider using Wortal CRM?',
            children: <p className='list_content'>{text}</p>,
        },
    ];

    return (
        <HeroSectionCard boxStyle='overflow-hidden'  heading='Frequently Ask Questions' subHead='Everything you need to know about the Wortal CRM.'  >
            <div className={styles.faqContainer}>
                <Collapse
                    accordion
                    bordered={false}
                    defaultActiveKey={['2']}
                    expandIconPosition="right"
                    expandIcon={({ isActive }) => isActive ? <CloseOutlined /> : <PlusOutlined />}
                    className={styles.siteCollapseCustomCollapse}
                >
                    {items.map((item) => (
                        <Panel header={item.label} key={item.key} className={styles.siteCollapseCustomPanel}  >
                            {item.children}
                        </Panel>
                    ))}
                </Collapse>
            </div> </HeroSectionCard>
    );
}

export default FAQPage;
