/// <reference types="@phoenix/phoenix-cli" />

namespace Accession {
    let _p = Phoenix,
        _history = _p.history,
        _dom = _p.dom,
        _link = _p.link,
        _customData = _p.customData,
        _ajax = _p.ajax;

    _ajax.interceptError(470, () => {
        _history.clear(false, false);
            _link.execLink({ $page: 'outils/session-expired', $replace: true }, {}, {});
    }, true);

    class SessionExpiredPageController extends Phoenix.ui.FormController {
        public onModelChanged(action, model, form: Phoenix.ui.Form) {
            const that = this;
            super.onModelChanged(action, model, form);
            switch (action.property) {
                case '$links.home':
                    form.navigate('home-page/home', {
                        canGoBack: false,
                        checkForChanges: false,
                        urlSearch: {}
                    });
                    break;
            }
        }
    }

    _customData.register('formation.session-expired.controller', new SessionExpiredPageController());

}