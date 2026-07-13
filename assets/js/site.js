(() => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

      const floatingHeader = document.querySelector("#floating-header");
      const floatingHeaderLinks = Array.from(floatingHeader.querySelectorAll("a"));
      function updateFloatingHeader() {
        const visible = window.scrollY > 128;
        floatingHeader.classList.toggle("is-visible", visible);
        floatingHeader.setAttribute("aria-hidden", String(!visible));
        floatingHeaderLinks.forEach((link) => {
          if (visible) link.removeAttribute("tabindex");
          else link.tabIndex = -1;
        });
      }
      updateFloatingHeader();
      window.addEventListener("scroll", updateFloatingHeader, { passive: true });

      // Every identity character occupies the same cell as the changing field around it.
      const letterField = document.querySelector("#letter-field");
      const identity = "justincqz";
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let fieldLetters = [];
      let fieldResizeTimer;

      function buildLetterField() {
        const cellWidth = window.innerWidth <= 760 ? 36 : 52;
        const columns = Math.max(identity.length, Math.floor(letterField.clientWidth / cellWidth));
        const rows = window.innerWidth <= 760 ? 7 : 6;
        const identityRow = Math.floor(rows / 2);
        const identityStart = identityRow * columns + Math.floor((columns - identity.length) / 2);
        const fragment = document.createDocumentFragment();

        letterField.replaceChildren();
        letterField.style.setProperty("--field-columns", String(columns));
        for (let index = 0; index < columns * rows; index += 1) {
          const cell = document.createElement("span");
          cell.className = "field-letter";
          const identityIndex = index - identityStart;
          if (identityIndex >= 0 && identityIndex < identity.length) {
            cell.classList.add("is-identity");
            cell.textContent = identity[identityIndex];
          } else {
            cell.dataset.letter = "";
            cell.textContent = alphabet[(index * 7 + columns) % alphabet.length];
          }
          fragment.append(cell);
        }
        letterField.append(fragment);
        fieldLetters = Array.from(letterField.querySelectorAll("[data-letter]"));
      }

      buildLetterField();
      window.addEventListener("resize", () => {
        window.clearTimeout(fieldResizeTimer);
        fieldResizeTimer = window.setTimeout(buildLetterField, 120);
      });

      if (!reducedMotion.matches) {
        window.setInterval(() => {
          const candidates = fieldLetters.slice().sort(() => Math.random() - 0.5).slice(0, Math.min(5, fieldLetters.length));
          candidates.forEach((letter, index) => {
            window.setTimeout(() => {
              letter.classList.add("is-flipping");
              window.setTimeout(() => {
                letter.textContent = alphabet[Math.floor(Math.random() * alphabet.length)];
                letter.classList.remove("is-flipping");
              }, 280);
            }, index * 90);
          });
        }, 1900);
      }

      const architectureDetails = {
        "ris": {
          counter: "NHS / 01",
          title: "RIS trigger endpoint",
          owner: "Hospital / NHS domain.",
          purpose: "Initiate the image workflow and indicate when the requested study is ready to pull.",
          flowRole: "Sends request and ready signals to the PACS archive.",
          deployment: "Existing hospital radiology information system."
        },
        "pacs": {
          counter: "NHS / 02",
          title: "PACS archive",
          owner: "Hospital / NHS domain.",
          purpose: "Store clinical image studies and make a requested study available to the integration layer.",
          flowRole: "Receives the RIS-triggered request; supplies DICOM image objects for pull and de-identification.",
          deployment: "Existing hospital imaging archive inside the clinical network."
        },
        "patient-metadata": {
          counter: "NHS / 03",
          title: "Patient health-record metadata service",
          owner: "Hospital / NHS domain.",
          purpose: "Provide the associated health-record metadata needed for analysis and monitoring.",
          flowRole: "Supplies patient metadata to the integration VM for synchronization with Aival Analysis Suite.",
          deployment: "Hospital-side data service within the controlled network."
        },
        "integration-vm": {
          counter: "INTEGRATION / 01",
          title: "De-identification, synchronization, and tunnel VM",
          owner: "Hospital-hosted integration layer, operated and supported by Aival.",
          purpose: "Bridge hospital systems and cloud services while de-identifying image data.",
          flowRole: "Pulls DICOM and patient metadata; sends de-identified images, synchronized metadata, and tunneled web traffic.",
          deployment: "Hospital-provisioned VM inside the controlled on-premises environment."
        },
        "workstation": {
          counter: "NHS / 04",
          title: "Radiologist workstation",
          owner: "Hospital / NHS domain.",
          purpose: "Give clinical users access to the Aival analysis and monitoring interface.",
          flowRole: "Requests the open web endpoint through the integration VM's controlled tunnel.",
          deployment: "Hospital workstation using an existing browser and network environment."
        },
        "router": {
          counter: "ROUTING / 01",
          title: "GCP / VPC DICOM router",
          owner: "Cloud routing layer.",
          purpose: "Choose the appropriate AI product for each de-identified study.",
          flowRole: "Receives DICOM and routes it by metadata, modality, and use case to one of multiple containers.",
          deployment: "Router service within a controlled GCP virtual private cloud."
        },
        "ai-products": {
          counter: "AI VENDORS / 01+",
          title: "Containerized AI products",
          owner: "Multiple AI vendors and product teams.",
          purpose: "Run modality- and use-case-specific inference across CXR, CT head, and additional products.",
          flowRole: "Receive routed, de-identified DICOM image objects and emit AI output or results to Aival.",
          deployment: "Multiple isolated product containers reached through the cloud routing layer."
        },
        "analysis": {
          counter: "AIVAL / 01",
          title: "Aival Analysis Suite",
          owner: "Aival.",
          purpose: "Monitor and analyze AI outputs alongside synchronized patient metadata.",
          flowRole: "Receives patient metadata by rsync and AI output from product containers; serves the web analysis interface.",
          deployment: "Cloud-hosted analysis product accessed from the hospital through the integration tunnel."
        }
      };

      const architectureControls = Array.from(document.querySelectorAll("[data-node]"));
      const architectureCounter = document.querySelector("#architecture-counter");
      const architectureTitle = document.querySelector("#architecture-node-title");
      const architectureOwner = document.querySelector("#architecture-owner");
      const architecturePurpose = document.querySelector("#architecture-purpose");
      const architectureFlowRole = document.querySelector("#architecture-flow-role");
      const architectureDeployment = document.querySelector("#architecture-deployment");

      function selectArchitectureNode(key) {
        const detail = architectureDetails[key];
        if (!detail) return;
        architectureControls.forEach((control) => {
          const selected = control.dataset.node === key;
          control.setAttribute("aria-pressed", String(selected));
          control.classList.toggle("is-active", selected);
        });
        architectureCounter.textContent = detail.counter;
        architectureTitle.textContent = detail.title;
        architectureOwner.textContent = detail.owner;
        architecturePurpose.textContent = detail.purpose;
        architectureFlowRole.textContent = detail.flowRole;
        architectureDeployment.textContent = detail.deployment;
      }

      architectureControls.forEach((control) => {
        control.addEventListener("click", () => selectArchitectureNode(control.dataset.node));
        control.addEventListener("keydown", (event) => {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          selectArchitectureNode(control.dataset.node);
        });
      });

      const portfolioStage = document.querySelector("#portfolio-stage");
      const portfolioTabs = Array.from(document.querySelectorAll(".portfolio-tab"));
      const portfolioPanels = Array.from(document.querySelectorAll(".portfolio-panel"));
      const progress = document.querySelector("#portfolio-progress");
      const progressBar = progress.querySelector(".progress-bar");
      const portfolioDuration = 8000;
      let portfolioIndex = 0;
      let portfolioElapsed = 0;
      let previousFrame = null;
      let pointerInside = false;
      let focusInside = false;

      function portfolioPaused() {
        return reducedMotion.matches || pointerInside || focusInside;
      }

      function selectPortfolio(index, moveFocus = false) {
        portfolioIndex = (index + portfolioTabs.length) % portfolioTabs.length;
        portfolioElapsed = 0;
        portfolioTabs.forEach((tab, tabIndex) => {
          const selected = tabIndex === portfolioIndex;
          tab.setAttribute("aria-selected", String(selected));
          tab.tabIndex = selected ? 0 : -1;
        });
        portfolioPanels.forEach((panel, panelIndex) => {
          panel.hidden = panelIndex !== portfolioIndex;
        });
        progressBar.style.transform = "scaleX(0)";
        progress.setAttribute("aria-valuenow", "0");
        if (moveFocus) portfolioTabs[portfolioIndex].focus();
      }

      portfolioTabs.forEach((tab, index) => {
        tab.addEventListener("click", () => selectPortfolio(index));
        tab.addEventListener("keydown", (event) => {
          if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          let next = index;
          if (event.key === "ArrowRight" || event.key === "ArrowDown") next = index + 1;
          if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = index - 1;
          if (event.key === "Home") next = 0;
          if (event.key === "End") next = portfolioTabs.length - 1;
          selectPortfolio(next, true);
        });
      });

      portfolioStage.addEventListener("pointerenter", () => { pointerInside = true; });
      portfolioStage.addEventListener("pointerleave", () => { pointerInside = false; });
      portfolioStage.addEventListener("focusin", () => { focusInside = true; });
      portfolioStage.addEventListener("focusout", () => {
        window.setTimeout(() => { focusInside = portfolioStage.contains(document.activeElement); }, 0);
      });

      function animatePortfolio(now) {
        if (previousFrame === null) previousFrame = now;
        const delta = Math.min(now - previousFrame, 100);
        previousFrame = now;
        if (!portfolioPaused()) {
          portfolioElapsed += delta;
          if (portfolioElapsed >= portfolioDuration) selectPortfolio(portfolioIndex + 1);
        }
        const percent = Math.min(100, (portfolioElapsed / portfolioDuration) * 100);
        progressBar.style.transform = `scaleX(${percent / 100})`;
        progress.setAttribute("aria-valuenow", String(Math.round(percent)));
        window.requestAnimationFrame(animatePortfolio);
      }
      window.requestAnimationFrame(animatePortfolio);

      const scatterDetails = {
        all: ["Overview / 42 samples", "Four classes in model space", "Inspect cluster separation, overlap, and outliers before moving from spatial evidence to source samples."],
        cohort: ["Selected cohort / 8 samples", "A spatial signal becomes a review set", "The selected cohort can move into gallery inspection, conditional filtering, and a curated CSV export."],
        a: ["Class A / 11 samples", "A compact lower-left cluster", "Class isolation makes local density and boundary overlap easier to evaluate."],
        b: ["Class B / 11 samples", "A broad upper cluster", "Several samples sit close to other class boundaries and merit deeper inspection."],
        c: ["Class C / 11 samples", "A dispersed lower-right cluster", "Spread and outliers are visible without losing the source-sample workflow."],
        d: ["Class D / 9 samples", "A smaller upper-left cluster", "Class-level inspection complements cohort selection rather than replacing it."]
      };
      const scatterDemo = document.querySelector("#scatter-demo");
      const scatterControls = Array.from(document.querySelectorAll(".scatter-control"));
      const scatterState = document.querySelector("#scatter-state");
      const scatterInspectorTitle = document.querySelector("#scatter-inspector-title");
      const scatterInspectorCopy = document.querySelector("#scatter-inspector-copy");

      scatterControls.forEach((control) => {
        control.addEventListener("click", () => {
          const view = control.dataset.scatter;
          const detail = scatterDetails[view];
          scatterDemo.dataset.scatterView = view;
          scatterControls.forEach((item) => item.setAttribute("aria-pressed", String(item === control)));
          scatterState.textContent = detail[0];
          scatterInspectorTitle.textContent = detail[1];
          scatterInspectorCopy.textContent = detail[2];
        });
      });

      const skillTabs = Array.from(document.querySelectorAll(".skill-tab"));
      const skillPanels = Array.from(document.querySelectorAll(".skill-panel"));

      function selectSkill(index, moveFocus = false) {
        const selectedIndex = (index + skillTabs.length) % skillTabs.length;
        skillTabs.forEach((tab, tabIndex) => {
          const selected = tabIndex === selectedIndex;
          tab.setAttribute("aria-selected", String(selected));
          tab.tabIndex = selected ? 0 : -1;
        });
        skillPanels.forEach((panel, panelIndex) => {
          panel.hidden = panelIndex !== selectedIndex;
        });
        if (moveFocus) skillTabs[selectedIndex].focus();
      }

      skillTabs.forEach((tab, index) => {
        tab.addEventListener("click", () => selectSkill(index));
        tab.addEventListener("keydown", (event) => {
          if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          let next = index;
          if (event.key === "ArrowRight" || event.key === "ArrowDown") next = index + 1;
          if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = index - 1;
          if (event.key === "Home") next = 0;
          if (event.key === "End") next = skillTabs.length - 1;
          selectSkill(next, true);
        });
      });
    })();
