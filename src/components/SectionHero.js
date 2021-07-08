import React from 'react';
import _ from 'lodash';

import { markdownify } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionHero extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const content = _.get(section, 'content');
        const actions = _.get(section, 'actions');

        return (
            <section id={sectionId} className=" outer--main">
                <div className="inner">
                    {title && (
                        <div className="block-header inner-sm">
                            {title && <h1 className="block-header inner-sm inner--main ">{title}</h1>}
                        </div>
                    )}
                    {content && <div className="block-content inner-sm inner--main">{markdownify(content)}</div>}
                    {actions && (
                        <div className="block-buttons inner-sm inner--main">
                            <CtaButtons actions={actions} />
                        </div>
                    )}
                    
                </div>
            </section>
        );
    }
}
