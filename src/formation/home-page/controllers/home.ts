/// <reference types="@phoenix/phoenix-cli" />
namespace Formation {
    const
        _p = Phoenix,
        _customData = _p.customData;

    class HomeController extends Phoenix.ui.FormController {
        public initObjectState(data: any) {
            // Initialization            
        }
        public onModelChanged(action: any, model: any, form: Phoenix.ui.Form) {
            super.onModelChanged(action, model, form);
            const that = this;
            switch (action.property) {
                case '$links.persons':
                    form.navigate('person/persons', {
                        canGoBack: true,
                        checkForChanges: false,
                        urlSearch: {
                        }
                    });
                    break;
                case '$links.lookup':
                    form.navigate('lookup/lookup', {
                        canGoBack: true,
                        checkForChanges: false,
                        urlSearch: {
                        }
                    });
                    break;
            }
        }
    }
    _customData.register('formation.home.controller', new HomeController());
}