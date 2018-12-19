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
            switch (action.property) {
                case '$links.save':
                    console.log('save')
                    break
            }
        }
    }
    _customData.register('basic.persons.controller', new PersonsController());
}