import { doc, setDoc } from "firebase/firestore";

await setDoc(doc(db, "expedition"), {
    name: "ex_name",
    date: "ex_date",
    description: "ex_description"
});

const expedition_form = doc(db, "expedition");
setDoc(expedition_form, { capital: true}, {merge: true});

class expedition_class {
    constructor (name, date, description) {
        this.name = name;
        this.date = state;
        this.description = description;
    }
    toString() {
        return this.name + ', ' + this.date + ', ' + this.description;
    }
}