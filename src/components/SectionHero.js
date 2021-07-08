import React from 'react';
import _ from 'lodash';

import { markdownify } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionHero extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const content = _.get(section, 'content');
        const actions = _.get(section, 'actions');

        return (
            <section id={sectionId} className="block block-hero outer outer--main">
                <div className="inner">
                    {title && (
                        <div className="block-header inner-sm inner--main ">
                            <h1 className="block-title">{title}</h1>
                        </div>
                    )}
                    {content && <div className="block-content inner-sm inner--main">{markdownify(content)}</div>}
                    {actions && (
                        <div className="block-buttons inner-sm inner--main">
                            <CtaButtons actions={actions} />
                        </div>
                    )}
                                    <div className="inner">
                    <div className="site-footer-inside">
                        <div className="site-info">
                            {copyright && <span className="copyright">{htmlToReact(copyright)}</span>}
                            {_.map(links, (action, index) => <ActionLink key={index} action={action} />)}
                        </div>
                        {hasSocial && !_.isEmpty(socialLinks) && (
                            <div className="social-links">
                                {_.map(socialLinks, (action, index) => <Action key={index} action={action} />)}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}
