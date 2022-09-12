// // =========================  STYLES  ========================= //

// import "./ChoiceRadio.scss";


// const ChoiceRadio = () => {
    
//   return (
//     // ----------  RETURN  ---------- //
//     <div class="radioContainer">
//       <span class="selection"></span>
//       <div class="option">
//         <input type="radio" id="work1" name="workType" value="all" checked />
//         <label for="work1">
//           <span>All</span>
//         </label>
//       </div>
//       <div class="option">
//         <input type="radio" id="work2" name="workType" value="personal" />
//         <label for="work2">
//           <span>Personal</span>
//         </label>
//       </div>
//       <div class="option">
//         <input type="radio" id="work3" name="workType" value="professional" />
//         <label for="work3">
//           <span>Professional</span>
//         </label>
//       </div>
//       <div class="option">
//         <input type="radio" id="work3" name="workType" value="labs" />
//         <label for="work3">
//           <span>Labs</span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default ChoiceRadio;
// =========================  STYLES  ========================= //

import "./ChoiceRadio.scss";




const ChoiceRadio = () => {
    
// Constants
const SEGMENTED_CONTROL_BASE_SELECTOR = ".ios-segmented-control";
const SEGMENTED_CONTROL_INDIVIDUAL_SEGMENT_SELECTOR = ".ios-segmented-control .option input";
const SEGMENTED_CONTROL_BACKGROUND_PILL_SELECTOR = ".ios-segmented-control .selection";

// Main
 setup();
// Body functions
function setup() {
  forEachElement(SEGMENTED_CONTROL_BASE_SELECTOR, elem => {
    elem.addEventListener("change", updatePillPosition);
  })
  window.addEventListener("resize", updatePillPosition); // Prevent pill from detaching from element when window resized. Because this is rare I haven't bothered with throttling the event
}
function updatePillPosition() {
  forEachElement(SEGMENTED_CONTROL_INDIVIDUAL_SEGMENT_SELECTOR, (elem, index) => {
    if (elem.checked) moveBackgroundPillToElement(elem, index);
  })
}
function moveBackgroundPillToElement(elem, index) {
  document.querySelector(SEGMENTED_CONTROL_BACKGROUND_PILL_SELECTOR).style.transform = "translateX(" + (elem.offsetWidth * index) + "px)";
}
// Helper functions
function forEachElement(className, fn) {
  Array.from(document.querySelectorAll(className)).forEach(fn);
}
    
  return (
    // ----------  RETURN  ---------- //
    <div class="ios-segmented-control">
  <span class="selection"></span>
  <div class="option">
    <input type="radio" id="metro" name="sample" value="metro" checked/>
    <label for="metro"><span>Metro</span></label>
  </div>
  <div class="option">
    <input type="radio" id="bus" name="sample" value="bus"/>
    <label for="bus"><span>Bus</span></label>
  </div>
  <div class="option">
    <input type="radio" id="train" name="sample" value="train"/>
    <label for="train"><span>Train</span></label>
  </div>
  <div class="option">
    <input type="radio" id="car" name="sample" value="car"/>
    <label for="car"><span>Car</span></label>
  </div>
</div>
  );
};

export default ChoiceRadio;
