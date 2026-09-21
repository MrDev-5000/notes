# Experimental Theory & Terminology

## Key Vocabulary
* **Accuracy:** How close a measurement or calculated mean value is to the true, globally accepted value.
* **Precision:** How close repeated independent measurements are to each other (i.e., the clustering of your data). It is determined solely by the spread of your results, not how close they are to the truth.
* **Resolution:** The smallest non-zero change in a physical quantity that an instrument can detect and display (e.g., $1 	ext{ mm}$ on a standard metre ruler).
* **Repeatable:** An experiment is repeatable if the *original experimenter* uses the same equipment and method and achieves the same results.
* **Reproducible:** An experiment is reproducible if a *different experimenter*, using a different method or different apparatus, achieves the same results.

---

## 2. Error Classifications & Mitigation Strategies

### Random Errors
* **Definition:** Unpredictable fluctuations in readings caused by environmental changes, human reaction time, or difficulty interpolating between scale divisions.
* **Impact:** They introduce a spread or scatter into your data points, reducing the **precision** of the experiment.
* **How to Fix:** Take a minimum of 3 repeat readings, check for and discard any anomalies, and calculate a **mean value**. This mathematically cancels out random fluctuations.

### Systematic Errors
* **Definition:** Consistent, predictable deviations where every single reading is shifted from the true value by the exact same amount and direction.
* **Impact:** They affect the **accuracy** of the results. Your graph will still produce a perfect straight line, but the y-intercept will be shifted.
* **Common Examples:**
  * **Zero Error:** An instrument gives a non-zero reading when it should read zero (e.g., a micrometer fully closed reading $+0.02 	ext{ mm}$). *Fix: Subtract the zero error from all subsequent readings.*
  * **Parallax Error:** Looking at a physical scale from an angle rather than perpendicularly. *Fix: Use a fiducial marker, align a mirror behind the scale, or view it strictly at eye level.*

---

##  3. Time Period Optimization
When dealing with periodic motion (like a simple pendulum or an oscillating mass on a spring), examiners will ask why you must time **20 full oscillations** rather than just timing 1 single oscillation.
This is because:
* **Human reaction time** ($approx \pm 0.2 \text{ s}$) introduces a fixed random error. If you time 1 oscillation lasting $1.5 	\text{ s}$, your percentage uncertainty is huge:
  $$\% \Delta t = \frac{0.2}{1.5} 	\times 100\% \approx 13.3\%$$
* **The Solution:** If you time 20 full oscillations ($30.0 	ext{ s}$ total), the absolute uncertainty remains $\pm 0.2 	\text{ s}$, but the percentage uncertainty drastically drops:
  $$\% \Delta t = \frac{0.2}{30.0} 	\times 100\% \approx 0.67\%$$
* **Exam Action:** To find the time period $T$ of a single oscillation, you divide the total measured time by 20 $(T = \frac{t_{\text{total}}}{20})$. The percentage uncertainty in $T$ remains exactly the same as the percentage uncertainty of the total time ($0.67\%$).

---

## 4. Resistivity/Circuits
In electrical practicals, you are often asked about the function or hazard of using a **flying lead** (a wire with a crocodile clip used to vary circuit length).
* **The Hazard:** Sliding a crocodile clip tightly along a delicate resistance wire can scrape the metal, reducing its uniform cross-sectional area ($A$). This introduces a systematic error because $A$ will no longer be constant along the length.
* **The Fix:** Disconnect or lift the clip entirely before moving it to the next length graduation marker, then clamp it firmly straight down.


