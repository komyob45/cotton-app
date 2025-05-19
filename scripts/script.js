const addButton = document.querySelector("#add");
const clearButton = document.querySelector("#clear");
const lots = document.querySelector("#lots");

addButton.addEventListener("click", () => {
  const lot = document.createElement("li");

  lot.innerHTML = `
    <label>
      Рамзи истеҳсолкуда
      <input type="number" class="manufacturer-code" />
    </label>
    <label>
      Рақами партия
      <input type="number" class="lot-number" />
    </label>
    <label>
      Вазн (кг)
      <input type="number" class="weight" />
    </label>
    <label>
      Миқдори тойҳо
      <input type="number" class="bales-quantity" />
    </label>
    <label>
      Миқдори намунаҳои гирифташуда
      <input type="number" class="selected-samples-quantity" />
    </label>
    <ul class="samples"></ul>
    <button class="add-sample">Намунаи нав</button>
    <button class="delete">Нест кардан</button>
  `;

  const addSampleButton = lot.querySelector(".add-sample");
  const samples = lot.querySelector(".samples");

  addSampleButton.addEventListener("click", () => {
    const sample = document.createElement("li");

    sample.innerHTML = `
      <label>
        Миқдори намуд
        <input type="number" class="sample-quantity" />
      </label>
      <label>
        Навъ аз рӯи ранг
        <select class="color">
          <option value="SM">SM</option>
          <option value="SMSp">SMSp</option>
        </select>
      </label>
      <label>
        Навъ аз рӯи гаджнокӣ
        <input type="number" class="sample-quality" />
      </label>
      <label>
        Дарозии штапелӣ
        <input type="number" class="sample-staple-length" />
      </label>
      <label>
        Нишондиҳандаи микронейр
        <input type="number" class="sample-micronaire-indicator" />
      </label>
      <button class="delete-sample">Нест кардани намуна</button>
    `;

    const deleteSampleButton = sample.querySelector(".delete-sample");

    deleteSampleButton.addEventListener("click", () => {
      const confirmation = confirm(
        "Шумо мутмаинед, ки мехоҳед намунаи мазкурро нест кунед?"
      );

      if (!confirmation) {
        return;
      }

      samples.removeChild(sample);
    });

    samples.appendChild(sample);
  });

  const deleteButton = lot.querySelector(".delete");

  deleteButton.addEventListener("click", () => {
    const lotNumber = lot.querySelector(".lot-number").value;
    const confirmation = confirm(
      `Шумо мутмаинед, ки мехоҳед ${
        lotNumber
          ? `партияи ${lotNumber}-ро нест кунед?`
          : "ин партияро нест кунед?"
      }`
    );

    if (!confirmation) {
      return;
    }

    lots.removeChild(lot);
  });

  lots.appendChild(lot);
});

clearButton.addEventListener("click", () => {
  const confirmation = confirm(
    "Шумо мутмаинед, ки мехоҳед ҳамаи партияҳоро нест кунед?"
  );

  if (!confirmation) {
    return;
  }

  lots.innerHTML = "";
});
