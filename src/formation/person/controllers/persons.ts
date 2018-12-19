/// <reference types="@phoenix/phoenix-cli" />
namespace Accession {
    const
        _p = Phoenix,
        _customData = _p.customData;

    class PersonsController extends Phoenix.ui.FormController {
        public initObjectState(data: any) {
            // Initialization            
        }
        public onModelChanged(action: any, model: any, form: Phoenix.ui.Form) {
            super.onModelChanged(action, model, form);
            const that = this;
            console.log(action)
            switch (action.property) {
                case 'persons.$links.add':
                    form.navigate('person/person', {
                        canGoBack: true,
                        checkForChanges: false,
                        urlSearch: {
                        }
                    });
                    break
                case 'persons.$item.$links.modify':
                    form.navigate('person/person', {
                        canGoBack: true,
                        checkForChanges: false,
                        urlSearch: {
                            personId: action.actionParams.personId
                        }
                    });
                    break
            }
        }
    }
    _customData.register('basic.persons.controller', new PersonsController());
}