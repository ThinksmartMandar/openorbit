//instantiate oo namespace..

(function(oo, $, undefined) {
    var _pages = {
            // from header-admin.shtml..
            AllocateRole:               {pageKey: "59dec2a293a64ec397a1", heading: "", css: "min-width: 0; min-height: 0;"},
            WelcomeMessage1:            {pageKey: "edc78518ced5433c88c9", heading: "", css: "min-width: 0; min-height: 0;"},
            MaintainTeams:              {pageKey: "30ffc95ba05b4e48a8b4", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectWithoutTeam:         {pageKey: "f63ef3ada5014134b51e", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectLockingUnlocking:    {pageKey: "3c9d1b31799642188d79", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectsDownloadReport:     {pageKey: "b79a6e4d5c5b49b5a02c", heading: "", css: "min-width: 0; min-height: 0;"},
            // from header.shtml..
            MyProjects:                 {pageKey: "8d0ed988486349028b80", heading: "", css: "min-width: 0; min-height: 0;"},
            Verticals:                  {pageKey: "f92b5b987a8c45329d5b", heading: "", css: "min-width: 0; min-height: 0;"},
            Horizontals:                {pageKey: "f315575fff364dc0ad45", heading: "", css: "min-width: 0; min-height: 0;"},
            MyProjectsSearch:           {pageKey: "3d1f125bec9e491fb2b0", heading: "", css: "min-width: 0; min-height: 0;"},
            NameAndStatus:              {pageKey: "b406286783dc4d86a965", heading: "", css: "min-width: 0; min-height: 0;"},
            MetricsContainer:           {pageKey: "379170981b574b22baf0", heading: "", css: "min-width: 0; min-height: 0;"},
            CausesContainer:            {pageKey: "e36f63e6cf154455bcf2", heading: "", css: "min-width: 0; min-height: 0;"},
            SolutionsContainer:         {pageKey: "0557308132b74f8b923c", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectTeam:                {pageKey: "10cc3d7ebc074cc19747", heading: "Assign to Team", css: "min-width: 0; min-height: 0;"},
            Permissions:                {pageKey: "337e8f4318474e4b82aa", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowProjectVSM:             {pageKey: "ac30fd6912f5497aaaf0", heading: "", css: "min-width: 0; min-height: 0;"},
            Worktypes:                  {pageKey: "ab85902797974f2c986d", heading: "", css: "min-width: 0; min-height: 0;"},
            DataCollection:             {pageKey: "e2586cc5d52245939472", heading: "", css: "min-width: 0; min-height: 0;"},
            PerformanceGap:             {pageKey: "669c58fae79f43d9b49f", heading: "", css: "min-width: 0; min-height: 0;"},
            HistoricalPerformance:      {pageKey: "477911c7aa2f4abdb24c", heading: "", css: "min-width: 0; min-height: 0;"},
            SolutionRoadmap:            {pageKey: "29c622e3c51448218bd3", heading: "", css: "min-width: 0; min-height: 0;"},
            BenefitTracking:            {pageKey: "248c82c0fbef4774bb7a", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectManagement:          {pageKey: "d71e5131e2c04ab5be22", heading: "", css: "min-width: 0; min-height: 0;"},
            ReturnOnInvestment:         {pageKey: "83f5fa270f874c2b8500", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectChecklists:          {pageKey: "87b3f4267cf646138bbd", heading: "", css: "min-width: 0; min-height: 0;"},
            SolutionChecklists:         {pageKey: "c36e4131777f4af79ab6", heading: "", css: "min-width: 0; min-height: 0;"},
            NotesAndAttachments:        {pageKey: "5fc00b1120de4f1782d6", heading: "", css: "min-width: 0; min-height: 0;"},
            Objective:                  {pageKey: "835bd6d665b54361aa9d", heading: "", css: "min-width: 0; min-height: 0;"},
            StageTracking:              {pageKey: "5ea9b42365734a3287fa", heading: "", css: "min-width: 0; min-height: 0;"},
            WelcomeMessage:             {pageKey: "edc78518ced5433c88c9", heading: "", css: "min-width: 0; min-height: 0;"},
            RecommedCauses:             {pageKey: "6b17b49b42074bc49265", heading: "", css: "min-width: 0; min-height: 0;"},
            MyTeamProjects:             {pageKey: "a78d2bb7b6904579ae86", heading: "", css: "min-width: 0; min-height: 0;"},
            MyTeamsProjectsSearch:      {pageKey: "19dd578c1c504f80a646", heading: "", css: "min-width: 0; min-height: 0;"},
            CustomTemplateChecklist:    {pageKey: "c03682fa8c2a4e029105", heading: "", css: "min-width: 0; min-height: 0;"},
            CustomSolutions:            {pageKey: "e957a38d0f044f15aefc", heading: "", css: "min-width: 0; min-height: 0;"},
            RecommendSolutions:         {pageKey: "16d3e45e22884ef8b847", heading: "", css: "min-width: 0; min-height: 0;"},
            CustomCauses:               {pageKey: "ad5dee0149ca43b4b4e5", heading: "", css: "min-width: 0; min-height: 0;"},
            BaseRediretion:             {pageKey: "a84df4a418f145b1a8da", heading: "", css: "min-width: 0; min-height: 0;"},
            Verticals_T:                {pageKey: "921b3c551a61412a8607", heading: "", css: "min-width: 0; min-height: 0;"},
            Horizontals_T:              {pageKey: "4fc038bbdc1044ff894c", heading: "", css: "min-width: 0; min-height: 0;"},
            RecommendMetrics:           {pageKey: "625dfbbe5b454d1090b8", heading: "", css: "min-width: 0; min-height: 0;"},
            CustomMetrics:              {pageKey: "d6bd11088ac1450886c1", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectMetrics_T:           {pageKey: "438f4e0b21e64ad690d7", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectCauses_T:            {pageKey: "92bde02b1a2a4b4b8751", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectSolutions_T:         {pageKey: "e4c0c4e0a058486a9dfe", heading: "", css: "min-width: 0; min-height: 0;"},
            Permissions_T:              {pageKey: "18321aea7bf74d5298ba", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowProjectVSM_T:           {pageKey: "", heading: "", css: "min-width: 0; min-height: 0;"},
            Worktypes_T:                {pageKey: "26cbea9aa9344e34a884", heading: "", css: "min-width: 0; min-height: 0;"},
            DataCollection_T:           {pageKey: "c116ad2df0924df9b1fe", heading: "", css: "min-width: 0; min-height: 0;"},
            PerformanceGap_T:           {pageKey: "2f9a12525f424d70b171", heading: "", css: "min-width: 0; min-height: 0;"},
            HistoricalPerformance_T:    {pageKey: "561752b14caf4e1cb411", heading: "", css: "min-width: 0; min-height: 0;"},
            SolutionRoadmap_T:          {pageKey: "c8bf3a91bf0640e2a021", heading: "", css: "min-width: 0; min-height: 0;"},
            BenefitTracking_T:          {pageKey: "56836db53f104414a158", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectManagement_T:        {pageKey: "435c8e8d2e824f779add", heading: "", css: "min-width: 0; min-height: 0;"},
            ReturnOnInvestment_T:       {pageKey: "6239c895a37d48328436", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectChecklists_T:        {pageKey: "572362e6a0994570a922", heading: "", css: "min-width: 0; min-height: 0;"},
            SolutionChecklists_T:       {pageKey: "37137dbf7f85464fb97f", heading: "", css: "min-width: 0; min-height: 0;"},
            NotesAndAttachments_T:      {pageKey: "10040366f2be49bd9c0a", heading: "", css: "min-width: 0; min-height: 0;"},
            StageTracking_T:            {pageKey: "538e2f6068fc4485ac43", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectDatesSummary_T:      {pageKey: "3da9e9010d4c463cb297", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectDateTracking_T:      {pageKey: "6364467e6a0d4bddb83b", heading: "", css: "min-width: 0; min-height: 0;"},
            ReviewCommentSummary_T:     {pageKey: "1057bed3c4304af18ee8", heading: "", css: "min-width: 0; min-height: 0;"},
            NameAndStatus_T:            {pageKey: "3e9929353b4943c68b03", heading: "", css: "min-width: 0; min-height: 0;"},
            Objective_T:                {pageKey: "73b2743b453f465b86a6", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectTeam_T:              {pageKey: "dcebca0b3bc84e3c8761", heading: "", css: "min-width: 0; min-height: 0;"},
            Processes_T:                {pageKey: "6c015ac7842f4babb4c6", heading: "", css: "min-width: 0; min-height: 0;"},
            Steps_T:                    {pageKey: "0584b9cd7d8647218bd0", heading: "", css: "min-width: 0; min-height: 0;"},
            DataValues_T:               {pageKey: "74fe00bfaa8242fe8c26", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowProjectInformation:     {pageKey: "32ecc0ba354643b7a084", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowProjectStatus:          {pageKey: "f386120d0f714e4d8894", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowProjectVerticals:       {pageKey: "beb2ae5e82214e93bc61", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowProjectHorizontals:     {pageKey: "cce5172e93de496894f2", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowProjectObjective:       {pageKey: "dbc3300630a34afb821a", heading: "", css: "min-width: 0; min-height: 0;"},
            AnnotateVSM:                {pageKey: "ee95e059814d4bd9896a", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowProjectCauses:          {pageKey: "c67b3eb7a5db4d4a97c7", heading: "", css: "min-width: 0; min-height: 0;"},
            AnnotateCauses:             {pageKey: "1ae4dffd2f964abc88b6", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowProjectSolutions:       {pageKey: "ca37e4d01445448ba0e2", heading: "", css: "min-width: 0; min-height: 0;"},
            AnnotateSolutions:          {pageKey: "65941082cd1b48db9e5d", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowProjectBenefits:        {pageKey: "abfc543ea098465db8e3", heading: "", css: "min-width: 0; min-height: 0;"},
            AnnotateBenefits:           {pageKey: "009c8bd25539464083b9", heading: "", css: "min-width: 0; min-height: 0;"},
            MyViewPermittedProjects:    {pageKey: "a1be7d9bee1d467db959", heading: "", css: "min-width: 0; min-height: 0;"},
            NameAndStatus_V:            {pageKey: "5a2321a42ab444d2a7ac", heading: "", css: "min-width: 0; min-height: 0;"},
            Verticals_V:                {pageKey: "f34735b9185842ccabc7", heading: "", css: "min-width: 0; min-height: 0;"},
            Horizontals_V:              {pageKey: "6bc0448ee0ac4f39b36c", heading: "", css: "min-width: 0; min-height: 0;"},
            Objective_V:                {pageKey: "61e1ce791076456683bc", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectMetrics_V:           {pageKey: "2006b3b62dc24b90a3b6", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectCauses_V:            {pageKey: "7a88e944e9bc4948a7c0", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectSolutions_V:         {pageKey: "42a4bad64aa94b719739", heading: "", css: "min-width: 0; min-height: 0;"},
            Permissions_V:              {pageKey: "d31bb8742d7343949590", heading: "", css: "min-width: 0; min-height: 0;"},
            Worktypes_V:                {pageKey: "1deec819b2784d01ad82", heading: "", css: "min-width: 0; min-height: 0;"},
            DataCollection_V:           {pageKey: "8c235516cbcb4cb3a722", heading: "", css: "min-width: 0; min-height: 0;"},
            PerformanceGap_V:           {pageKey: "3b0ac85f078444b6a737", heading: "", css: "min-width: 0; min-height: 0;"},
            HistoricalPerformance_V:    {pageKey: "060b99d217b3445390a8", heading: "", css: "min-width: 0; min-height: 0;"},
            SolutionRoadmap_V:          {pageKey: "202aa490eecb46449e11", heading: "", css: "min-width: 0; min-height: 0;"},
            BenefitTracking_V:          {pageKey: "55f78a0defc14c00b2dc", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectManagement_V:        {pageKey: "2a0c04e5657640429d56", heading: "", css: "min-width: 0; min-height: 0;"},
            ReturnOnInvestment_V:       {pageKey: "abee5ee9fc1142008c3e", heading: "", css: "min-width: 0; min-height: 0;"},
            StageTracking_V:            {pageKey: "b0866537d14649eb89f3", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectChecklists_V:        {pageKey: "ecb93967d9314975a571", heading: "", css: "min-width: 0; min-height: 0;"},
            SolutionChecklists_V:       {pageKey: "1195c88215164b998db3", heading: "", css: "min-width: 0; min-height: 0;"},
            NotesAndAttachments_V:      {pageKey: "87af3db9fe2a430bbfd6", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectDatesSummary_V:      {pageKey: "cc576d64035e445e8a0b", heading: "", css: "min-width: 0; min-height: 0;"},
            NameAndStatus_E:            {pageKey: "", heading: "", css: "min-width: 0; min-height: 0;"},
            StageTracking_E:            {pageKey: "c76d926b61364ac8a6fd", heading: "", css: "min-width: 0; min-height: 0;"},
            DataCollection_E:           {pageKey: "c4eda37849fd46bf9da8", heading: "", css: "min-width: 0; min-height: 0;"},
            NotesAndAttachments_E:      {pageKey: "d627d77318114494b237", heading: "", css: "min-width: 0; min-height: 0;"},
            HistoricalPerformance_E:    {pageKey: "35cfc702eafe481285cb", heading: "", css: "min-width: 0; min-height: 0;"},
            MyEditPermittedProjects:    {pageKey: "82d425871f7d44c3bd75", heading: "", css: "min-width: 0; min-height: 0;"},
            MyEditPerProjectsSearch:    {pageKey: "3d2c1d653c304639abfa", heading: "", css: "min-width: 0; min-height: 0;"},
            MyviewPerProjectsSearch:    {pageKey: "777fb36dab104b36b734", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectVSMContainer:        {pageKey: "6eb5ce1f34e542f28d5a", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectVSMContainer_T:      {pageKey: "ff835b8e57694cb3b218", heading: "", css: "min-width: 0; min-height: 0;"},
            TestLoginPage:              {pageKey: "1eba73772ec84cd6b7db", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectVSMContainer_V:      {pageKey: "4425b780594b41edbacf", heading: "", css: "min-width: 0; min-height: 0;"},
            StartNewDiagnostics:        {pageKey: "a7501933b3344426b9e1", heading: "", css: "min-width: 0; min-height: 0;"},
            CheckOptions:               {pageKey: "8701121c95854bf295a2", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectTeam_V:              {pageKey: "10722ac6730047878748", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowCauses_T:               {pageKey: "49053a85e3c5434b90cc", heading: "", css: "min-width: 0; min-height: 0;"},
            AnnotateSolutions_T:        {pageKey: "b0574b6595ea43cc9a44", heading: "", css: "min-width: 0; min-height: 0;"},
            AnnotateVSM_T:              {pageKey: "b6d901c8583b4996bc70", heading: "", css: "min-width: 0; min-height: 0;"},
            AnnotateBenefit_T:          {pageKey: "b5d0116dc6064833953d", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowProjectInformation_new_T:   {pageKey: "4026fae826a34bef9ad9", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowProjectStatus_T:        {pageKey: "ddff1890c22f44378d02", heading: "", css: "min-width: 0; min-height: 0;"},
            CostandBenefit_T:           {pageKey: "018425f9242444a9b899", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectBetween_T:           {pageKey: "4fa2f9e6df2e402e9409", heading: "", css: "min-width: 0; min-height: 0;"},
            WithoutVoC_T:               {pageKey: "dc52802c21ff4172ad35", heading: "", css: "min-width: 0; min-height: 0;"},
            NoStageComplete_T:          {pageKey: "49a6b62bc27944f1b072", heading: "", css: "min-width: 0; min-height: 0;"},
            StageandChecklist_T:        {pageKey: "85d4e4ca76e149f3bb5c", heading: "", css: "min-width: 0; min-height: 0;"},
            CostBenefitAndVoC:          {pageKey: "1d7f0251bd524e429cba", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectActionItemReport:    {pageKey: "24bbb7133c604da5af19", heading: "", css: "min-width: 0; min-height: 0;"},
            SolutionActionItemReport:   {pageKey: "b5cba8c5f76d479db51b", heading: "", css: "min-width: 0; min-height: 0;"},
            // added to header.shtml on 14/7/2016..
            MetricsConnection:          {pageKey: "ae3c538677ce4d6b800b", heading: "", css: "min-width: 0; min-height: 0;"},
            CausesConnection:           {pageKey: "8b5337ca16574cf0b273", heading: "", css: "min-width: 0; min-height: 0;"},
            SolutionConnection:         {pageKey: "4821dd512d084cec87f4", heading: "", css: "min-width: 0; min-height: 0;"},
            // from header-frame.shtml..
            ApplyAccount:               {pageKey: "2fb5ab9a0ccd47c0adf9", heading: "Apply for an Account", css: "max-width: 500px;"},
            ChangeUsername:             {pageKey: "a3a831057a32451da942", heading: "Change Username", css: "min-width: 0; min-height: 0;"},
            ChangePassword:             {pageKey: "456dadb8491a4532a235", heading: "Change Password", css: "min-width: 500px; min-height: 0;"},
            ChangeSubscription:         {pageKey: "04bae9fe467d416981f3", heading: "Change Subscription", css: "min-width: 0; min-height: 0;"},
            Verticals_add:              {pageKey: "599f1ac380fe4ff7b0de", heading: "Add an Industry Vertical", css: "min-width: 300px; min-height: 0;"},
            Horizontals_get_suggested:  {pageKey: "e9b4f3013ecc47ccab65", heading: "Ask OO", css: "min-width: 500px; min-height: 0;"},
            Horizontals_add:            {pageKey: "d4972c72b8584868b640", heading: "Add a Horizontal", css: "min-width: 0; min-height: 0;"},
            Permissions_add:            {pageKey: "d616c6d24edf4bfa810e", heading: "Add Permissions", css: "min-width: 0; min-height: 0;"},
            RecommendStdSolutionforStdCause:        {pageKey: "bf3397d2e2564d529538", heading: "Recommend a Standard Solution for a Standard Cause", css: "min-width: 550px; min-height: 0;"},
            RecommendCustomSolutionforStdCause:     {pageKey: "02156592171d4acdb409", heading: "Recommend a Custom Solution for a Standard Cause", css: "min-width: 550px; min-height: 0;"},
            RecommendStdSolutionforCustomCause:     {pageKey: "a949deb7a9c9458ea38e", heading: "Recommend a Standard Solution for a Custom Cause", css: "min-width: 550px; min-height: 0;"},
            RecommedCustomSolutionforCustomCause:   {pageKey: "066fa060716a49d98382", heading: "Recommend a Custom Solution for a Custom Cause", css: "min-width: 550px; min-height: 0;"},
            RecommendCustomCauseforCustomMetrics:   {pageKey: "08fc9c0a36f54cf9acc8", heading: "Recommend a Custom Cause for a Custom Metric", css: "min-width: 550px; min-height: 0;"},
            RecommendStdCauseforCustomMetric:       {pageKey: "ad080369d3264daaa8a0", heading: "Recommend a Standard Cause for a Custom Metric", css: "min-width: 550px; min-height: 0;"},
            RecommendCustomCauseforStdMetrics:      {pageKey: "7e7b544825ac4e8a83bc", heading: "Recommend a Custom Cause for a Standard Metric", css: "min-width: 550px; min-height: 0;"},
            RecommendStdCauseforStdMetrics:         {pageKey: "d9df2cc640494949b648", heading: "Recommend a Standard Cause for a Standard Metric", css: "min-width: 550px; min-height: 0;"},
            DisplayUserInformation:                 {pageKey: "d9bad6bd91f1474a912a", heading: "My Profile", css: "min-width: 450px; min-height: 0;"},
            DisplayAdminUserInformation:            {pageKey: "3fbed0c1a4a94761af64", heading: "My Profile", css: "min-width: 450px; min-height: 0;"},
            RecommendStdMetrics:        {pageKey: "81c12e2456df4ba5b7ad", heading: "Recommend a Standard Metric", css: "min-width: 0; min-height: 0;"},
            RecommendCustomMetrics:     {pageKey: "9d7032ee06084de9b2be", heading: "Recommend a Custom Metric", css: "min-width: 0; min-height: 0;"},
            Steps_add:                  {pageKey: "a21a626e4e0d4346a3a3", heading: "Add Steps", css: "min-width: 0; min-height: 0;"},
            Processes_add:              {pageKey: "104cd7ab7456463bbf3d", heading: "Add Processes", css: "min-width: 0; min-height: 0;"},
            ResetSetting:               {pageKey: "dd6365cafae74bb8ba72", heading: "Reset Preferences", css: "min-width: 0; min-height: 0;"},
            AddNewObjective:            {pageKey: "d52332d4431747db8319", heading: "Add Objective", css: "min-width: 0; min-height: 0;"},
            // added to header-frame.shtml on 30/6/2016..
            ChangeOwner:                {pageKey: "c0f17f5b614e48908f03", heading: "Change Owner", css: "min-width: 0; min-height: 0;"},
            // from forgot-password.shtml..
            ForgotPassword:             {pageKey: "62d650901fd64868aaa5", heading: "", css: "min-width: 0; min-height: 0;"},
            // from signup.shtml..
            SignUp:                     {pageKey: "61c1b6c6958c4ab5ac29", heading: "", css: "min-width: 0; min-height: 0;"},
            // newly created..
            ProjectManagement_New:      {pageKey: "666a9a6fd8974468ba04", heading: "", css: "min-width: 0; min-height: 0;"},
            Processes:                  {pageKey: "4adb295c2ea54974b7c2", heading: "", css: "min-width: 0; min-height: 0;"},
            Steps:                      {pageKey: "f7e124198910450c9700", heading: "", css: "min-width: 0; min-height: 0;"},
            SubmitForSearch:            {pageKey: "c2a1becb7cd1493b858e", heading: "Submit for Search", css: "min-width: 0; min-height: 0;"},
            ShowProjectInformation_new: {pageKey: "b1f05c12e9214ce2a00e", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowProcessesAndSteps:      {pageKey: "b3e7225948df41a3923c", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowDataValuesAll:          {pageKey: "64e4ba7bca194992bf06", heading: "", css: "min-width: 0; min-height: 0;"},
            ShowProcessesAndSteps_T:    {pageKey: "224c1e4d45d7477398b2", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectManagement_New_T:    {pageKey: "2bc7f69516ef4d24b069", heading: "", css: "min-width: 0; min-height: 0;"},
            ProjectManagement_New_V:    {pageKey: "46cc8ea3b7204ab3a73c", heading: "", css: "min-width: 0; min-height: 0;"},
            Processes_V:                {pageKey: "5cbc0ea9c896446393c3", heading: "", css: "min-width: 0; min-height: 0;"},
            Steps_V:                    {pageKey: "befabbe318304d60a525", heading: "", css: "min-width: 0; min-height: 0;"},
            VSMContainer:               {pageKey: "6d6b60e939c641faa9fc", heading: "", css: "min-width: 0; min-height: 0;"},
            interactiveVSMContainer:    {pageKey: "3349e4d0107c48028091", heading: "", css: "min-width: 0; min-height: 0;"},
            ProcessReportsHeader:       {pageKey: "4b12946f04a84eb096b8", heading: "", css: "min-width: 0; min-height: 0;"},
            Fishbone:                   {pageKey: "6bb7a20a48fb4a03bc85", heading: "", css: "min-width: 0; min-height: 0;"},
            CustomReports:              {pageKey: "9069f8269cfe49f99aa4", heading: "", css: "min-width: 0; min-height: 0;"},
            CustomFields:               {pageKey: "a1d68aa359064ee0b519", heading: "", css: "min-width: 0; min-height: 0;"},
            CustomLOVs:                 {pageKey: "031921cb246949e784d2", heading: "", css: "min-width: 0; min-height: 0;"},
            CustomReportsFields:        {pageKey: "d525740bbeed484f9767", heading: "", css: "min-width: 0; min-height: 0;"},
            CustomFieldsValues_LOVs:    {pageKey: "f8d0456a1fc1488da3a1", heading: "", css: "min-width: 0; min-height: 0;"},
           CustomFieldsValues_Text:     {pageKey: "f7351e3da3434cbbb577", heading: "", css: "min-width: 0; min-height: 0;"},
            CustomReportOutput:         {pageKey: "3117e2d8f5e647ed9018", heading: "", css: "min-width: 0; min-height: 0;"},
           Notes_E_add:         {pageKey: "3b51c6466b2e430d9b1b", heading: "Add Notes", css: "min-width: 450px; min-height: 0;"},
           CustomHeader:               {pageKey: "505b19bacc584005a54a", heading: "", css: "min-width: 0; min-height: 0;"},
           ProjectCustomReport:               {pageKey: "621434f2d6f64a6cb426", heading: "", css: "min-width: 0; min-height: 0;"},
           MilestoneStages:               {pageKey: "2057111b3f8e4e4bbaa9", heading: "", css: "min-width: 0; min-height: 0;"},
           SolutionAction:           {pageKey: "00b6a819358946e69877", heading: "See Actions Taken", css: "min-width: 750px; min-height: 0;"},
             RAGAutoStatus:            {pageKey: "25c77a4015e548df9f64", heading: "Delivery Status", css: "min-width: 0; min-height: 0;"},
 ProjectTeam_New:            {pageKey: "79efc7cd854c49bf822a", heading: "Teams", css: "min-width: 0; min-height: 0;"},
 AllUsers:            {pageKey: "95b79d3fe3dc4d6a8979", heading: "All Users", css: "min-width: 0; min-height:0;"},
 ManageSubscriptions:            {pageKey: "565c6a1dcc9b445cb3d9", heading: "Manage Subscriptions", css: "min-width: 0; min-height: 0;"},

 ShowProjectCauses_T:            {pageKey: "5334090d042c42a8ab49", heading: "Show Project Causes", css: "min-width: 0; min-height: 0;"},
 ShowProjectSolutions_T:            {pageKey: "97d03d8503194e0f9140", heading: "Show Project Solutions", css: "min-width: 0; min-height: 0;"},
ShowProjectDataValues_T:            {pageKey: "beb1bcb0f32e4119aed5", heading: "Show Project Metrics", css: "min-width: 0; min-height: 0;"},
ShowBenefitTracking_T:            {pageKey: "93984dc540714b8d8636", heading: "Show Benefit Tracking", css: "min-width: 0; min-height: 0;"},

 CustomFieldsValues_LOVs_T:    {pageKey: "8d9a1be4ebee47648755", heading: "", css: "min-width: 0; min-height: 0;"},
           CustomFieldsValues_Text_T:     {pageKey: "444e59df08c54a8f8dfd", heading: "", css: "min-width: 0; min-height: 0;"},
            CustomReportOutput_T:         {pageKey: "c7677d57885f49689700", heading: "", css: "min-width: 0; min-height: 0;"},
  Notes_add:         {pageKey: "158c08dd7d954c1db015", heading: "Add Notes", css: "min-width: 450px; min-height: 0;"},
CustomReports_add:                  {pageKey: "2988200a301443c992d6", heading: "Add CustomReports", css: "min-width: 0; min-height: 0;"},

CustomFields_add:                  {pageKey: "5305c57116d54873bf66", heading: "Add CustomFields", css: "min-width: 0; min-height: 0;"},

CustomLOVs_add:                  {pageKey: "e6e17a075e7d499eb318", heading: "Add CustomLOVs", css: "min-width: 0; min-height: 0;"},

CustomReportFields_add:                  {pageKey: "3d088d71a4b649c99069", heading: "Add CustomReportFields", css: "min-width: 0; min-height: 0;"},

interactiveVSMPrintContainer:{pageKey: "d86ce7c9bab6470396fd", heading: "Print VSM", css: "min-width: 0; min-height: 0;"},
 NotesAdd_T:         {pageKey: "cfa482e61edf43fe82da", heading: "Add Notes", css: "min-width: 450px; min-height: 0;"},
ConfirmChangeOwner: {pageKey: "4e5a7a4c62574f42b3b2", heading: "Change Owner", css: "0; min-height: 0;"},
HiddenAccountIframe: {pageKey: "0225cc9882be485aa5d8", heading: "", css: "0; min-height: 0;"},
ProjectsPerTeam:{pageKey: "cc9f1655fd724055aef3", heading: "", css: "0; min-height: 0;"},
TeamsStages:{pageKey: "2ddfa414a9084db9825f", heading: "", css: "0; min-height: 0;"},
MyPendingApprovals:{pageKey: "d67e5a51c5864ae296ec", heading: "", css: "0; min-height: 0;"},
ViewProjectRoles:{pageKey: "6a19e53b5a5a43b7ad16", heading: "", css: "0; min-height: 0;"},
Assign_Roles:{pageKey: "1d1f31d8f2414100831c", heading: "Assign Project Role", css: "min-width: 400px; min-height: 300px;"},
AuditLogReport:{pageKey: "71ae25edb1464f8495d1", heading: "", css: "0; min-height: 0;"},
interactiveVSMPrintContainer_T:{pageKey: "97f6739d857f4e48bae6", heading: "Print VSM_T", css: "min-width: 0; min-height: 0;"},
Fishbone_T:                   {pageKey: "32dac62fcab847dc9063", heading: "", css: "min-width: 0; min-height: 0;"},
 ProcessReportsHeader_T:       {pageKey: "a923f8e3148b43278705", heading: "", css: "min-width: 0; min-height: 0;"},
 ActiveSubscription:            {pageKey: "e8fbf3f4c39d462e8bdd", heading: "ActiveSubscription", css: "min-width: 0; min-height:0;"},
 BeforeVsAfterReport:             {pageKey: "d085c81c2d364c36aaa0", heading: "", css: "min-width: 0; min-height: 0;"},
BenefitsAnalysisReport:             {pageKey: "85d548cd12884e5faf43", heading: "", css: "min-width: 0; min-height: 0;"},
 MaintainRoles:              {pageKey: "85f00486f44245f8855e", heading: "", css: "min-width: 0; min-height: 0;"},
WorkflowRules:              {pageKey: "2676f8592a094d93aeab", heading: "", css: "min-width: 0; min-height: 0;"},
WorkflowRules_ADD:                {pageKey: "7d2035a6b46e48d2ac42", heading: "Add WorkflowRules", css: "min-width: 0; min-height: 0;"},
Stages_Add:              {pageKey: "a7ee80e256594ffab3f6", heading: "", css: "min-width: 300; min-height: 300;"},
AccountStages:              {pageKey: "ee8b24d0684c47c080c6", heading: "", css: "min-width: 300; min-height: 300;"},
BenefitAnalysisReport_T:           {pageKey: "18aee1c9d99d45aa84e5", heading: "", css: "min-width: 0; min-height: 0;"},
BeforeVsAfterReport_T:           {pageKey: "0d1cc932d27e467d8345", heading: "", css: "min-width: 0; min-height: 0;"},
UsersWithoutAccount:              {pageKey:"8c04e66456df49008d10", heading: "", css: "min-width: 0; min-height: 0;"},
ShowProjectSolutionChecklist:        {pageKey: "90b496f2859f41cebb75", heading: "", css: "min-width: 0; min-height: 0;"},
ShowSolutionchecklist_T:            {pageKey: "af29df09475048b889eb", heading: "Show Benefit Tracking", css: "min-width: 0; min-height: 0;"},
UserLog:                            {pageKey: "1a1ade9985cd4a04ac2f", heading: "Show Benefit Tracking", css: "min-width: 0; min-height: 0;"},
AnnotateSolutionchecklist:             {pageKey: "5fc498de800842fc84a2", heading: "", css: "min-width: 0; min-height: 0;"},
AnnotateSolutionchecklist_T:             {pageKey: "fd9c2c41fb694b179170", heading: "", css: "min-width: 0; min-height: 0;"},
Account_Template:             {pageKey: "4cd92bdf673242fc8baa", heading: "", css: "min-width: 0; min-height: 0;"},
AccountTemplateReport:             {pageKey: "bd351759ac884b08924f", heading: "", css: "min-width: 0; min-height: 0;"},
interactiveVSMContainer_T:      {pageKey: "c4b032b9356b4dd99d9d", heading: "", css: "min-width: 0; min-height: 0;"},
AccountTemplateReport_P:             {pageKey: "787d11ed850144ca9f01", heading: "", css: "min-width: 0; min-height: 0;"},
Selectcustomfieldcontainer:             {pageKey: "24dd3823a0a345168ce7", heading: "", css: "min-width: 0; min-height: 0;"},
SelectcustomfieldcontainerLOV:             {pageKey: "e8a1f40478304623beb0", heading: "", css: "min-width: 0; min-height: 0;"},
AuditLogForAllTeamProjects:             {pageKey: "0e357b77ae9546baa0fc", heading: "", css: "min-width: 0; min-height: 0;"},
CustomReport_Output:             {pageKey: "38e0a83339aa44ef9900", heading: "", css: "min-width: 0; min-height: 0;"},        
CustomReport_OutputT:             {pageKey: "b11b6922eadc425a9fbc", heading: "", css: "min-width: 0; min-height: 0;"},
ProcessReportsHeader_Fishbone:             {pageKey: "76193f31ad0348c18997", heading: "", css: "min-width: 0; min-height: 0;"},
ProcessReportsHeaderFishbone_T:             {pageKey: "ddac6aae3d26478abda0", heading: "", css: "min-width: 0; min-height: 0;"},         
ProjectRegisterSection1:             {pageKey: "b6dd0e24f6044e20943f", heading: "", css: "min-width: 0; min-height: 0;"},
FooterTextVSMRead:          {pageKey: "55ccd335630f4eda947d", heading: "", css: "min-width: 0; min-height: 0;"},
FooterTextVSMedit:          {pageKey: "", heading: "", css: "min-width: 0; min-height: 0;"},
WikiPage:             {pageKey: "460161bb2e544fc9b938", heading: "", css: "min-width: 0; min-height: 0;"}

},

        _options = {},
        _defaultOptions = {
            debugMode:              true,
            pagePrefix:             "ef404",
            protocol:               "https://",
            websiteDomain:          "files.insolitusglobal.com",
            websitePlatform:        "/oo/dev",
            serverDomain:           "c0amf816.caspio.com"
        };

    oo.init = function(options) {
        if (typeof options != "undefined") {
            _options = $.extend({}, _defaultOptions, options);
        }
        $.extend(true, _options, {
            websiteServer: (_options.protocol + _options.websiteDomain),
            caspioServer: (_options.protocol + _options.serverDomain)
        });
        oo.log("oo.init: Initialised with " + JSON.stringify(_options));
    };

    oo.debugMode = function() {
        return _options.debugMode;
    };
    oo.log = function(msg) {
        if (_options.debugMode) {
            console.log(msg);
        }
    };
    oo.Protocol = function() {
        return (_options.protocol);
    };
    oo.WebsiteName = function() {
        return (_options.websiteDomain);
    };
    oo.ServerName = function() {
        return (_options.serverDomain);
    };
    oo.CaspioServer = function() {
        return (_options.caspioServer);
    };
    oo.WebsiteServer = function() {
        return (_options.websiteServer);
    };
    oo.WebsitePlatform = function() {
        return (_options.websitePlatform);
    };
    oo.PagePrefix = function() {
        return (_options.pagePrefix);
    };
    oo.PageKey =  function(pageName) {
        return ((typeof _pages[pageName] != "undefined") ? _pages[pageName].pageKey : "");
    };
    oo.PageHeading = function(pageName) {
        return ((typeof _pages[pageName] != "undefined") ? _pages[pageName].heading : "");
    };
    oo.PageCSS = function(pageName) {
        return ((typeof _pages[pageName] != "undefined") ? _pages[pageName].css : "");
    };
    oo.AppKey = function(pageKey) {
        return (_options.pagePrefix + "000" + oo.PageKey(pageKey));
    };
    oo.DataPageUrl = function(pageKey) {
        return (oo.Protocol() + oo.ServerName() + "/dp.asp?AppKey=" + oo.AppKey(pageKey));
    };

}(window.oo = window.oo || {}, jQuery));
