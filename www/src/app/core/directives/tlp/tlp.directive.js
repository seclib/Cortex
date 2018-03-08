'use strict';

import _ from 'lodash/core';

import tpl from './tlp.html';
import './tlp.scss';

export default function(app) {
  app.directive('tlp', tlp);

  function tlp(Tlps) {
    'ngInject';

    return {
      templateUrl: tpl,
      scope: {
        value: '='
      },
      replace: true,
      link: linkFn
    };

    function linkFn(scope) {
      if (scope.value === undefined) {
        scope.tlpClass = 'label-none';
        scope.tlp = 'None';
      } else {
        const temp = (_.find(Tlps, { value: scope.value }) || {}).key;

        scope.tlpClass = `label-${(temp || '').toLowerCase()}`;
        scope.tlp = `TLP:${temp}`;
      }
    }
  }
}
