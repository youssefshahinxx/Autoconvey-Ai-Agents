<script>
    import ProgressBar from "$lib/components/assessment/ProgressBar.svelte";
    import FormHeader from "$lib/components/assessment/FormHeader.svelte";
    import FormSection from "$lib/components/assessment/FormSection.svelte";

    let progress = 0;

    function updateProgress(event) {
        const form = event.currentTarget;
        const sections = form.querySelectorAll(".form-section");
        let completedSections = 0;

        sections.forEach((section) => {
            const inputs = section.querySelectorAll("input, select, textarea");
            const hasValue = Array.from(inputs).some((input) => {
                if (input.type === "radio" || input.type === "checkbox") {
                    return input.checked;
                }
                return input.value.trim() !== "";
            });

            if (hasValue) {
                completedSections++;
            }
        });

        progress = (completedSections / sections.length) * 100;
    }
</script>

<svelte:head>
    <title>Business Automation Assessment | Autoconvey</title>
    <meta name="description" content="Take the 5-minute Autoconvey assessment to audit your business workflows, uncover hidden revenue leaks, and find exactly where autonomous AI agents can save you time." />
    <meta name="keywords" content="business automation audit, AI workflow assessment, revenue leak calculator, operational efficiency check, AI voice agent readiness" />
</svelte:head>

<ProgressBar {progress} />

<FormHeader />

<main class="px-6 pb-20">
    <form
        action="/submit-assessment"
        method="POST"
        class="max-w-4xl mx-auto"
        data-netlify="true"
        on:input={updateProgress}
    >
        <FormSection
            step="1"
            title="Basic Information"
            description="Let's start with the essentials to get to know you and your business."
        >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="form-group">
                    <label for="full_name">Full Name</label>
                    <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        required
                        placeholder="John Smith"
                    />
                </div>
                <div class="form-group">
                    <label for="company_name">Company Name</label>
                    <input
                        type="text"
                        id="company_name"
                        name="company_name"
                        required
                        placeholder="Acme Corporation"
                    />
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@acmecorp.com"
                    />
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                    />
                </div>
                <div class="form-group">
                    <label for="website">Website URL</label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        placeholder="https://acmecorp.com"
                    />
                </div>
                <div class="form-group">
                    <label for="country_timezone">Country / Timezone</label>
                    <input
                        type="text"
                        id="country_timezone"
                        name="country_timezone"
                        placeholder="United States (EST)"
                    />
                </div>
            </div>
        </FormSection>

        <FormSection
            step="2"
            title="Business Overview"
            description="Help us understand what your business does and how it operates."
        >
            <div class="form-group">
                <label for="business_description"
                    >What does your business do? (Short description) *</label
                >
                <textarea
                    id="business_description"
                    name="business_description"
                    rows="4"
                    required
                    placeholder="We provide marketing services to small businesses, helping them grow their online presence through social media management and content creation."
                ></textarea>
            </div>
            <div class="form-group">
                <label for="services_products"
                    >What services or products do you offer?</label
                >
                <textarea
                    id="services_products"
                    name="services_products"
                    rows="3"
                    placeholder="List your main services or products that customers purchase from you."
                ></textarea>
            </div>
            <div class="form-group">
                <label for="typical_customers"
                    >Who are your typical customers?</label
                >
                <textarea
                    id="typical_customers"
                    name="typical_customers"
                    rows="3"
                    placeholder="Describe your ideal customer - age, industry, company size, etc."
                ></textarea>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="form-group">
                    <label for="employees"
                        >How many employees do you have?</label
                    >
                    <select id="employees" name="employees">
                        <option value="">Select...</option>
                        <option value="1-5">1-5 employees</option>
                        <option value="6-10">6-10 employees</option>
                        <option value="11-25">11-25 employees</option>
                        <option value="26-50">26-50 employees</option>
                        <option value="51+">51+ employees</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="inquiries_per_day"
                        >How many customer inquiries do you receive per day?</label
                    >
                    <select id="inquiries_per_day" name="inquiries_per_day">
                        <option value="">Select...</option>
                        <option value="0-10">0–10 inquiries</option>
                        <option value="10-30">10–30 inquiries</option>
                        <option value="30-60">30–60 inquiries</option>
                        <option value="60+">60+ inquiries</option>
                    </select>
                </div>
            </div>
        </FormSection>

        <FormSection
            step="3"
            title="Customer Communication"
            description="Tell us about how customers interact with your business and your current communication patterns."
        >
            <div class="form-group">
                <label>Do customers call your business?</label>
                <div class="radio-group">
                    <label
                        ><input
                            type="radio"
                            name="customers_call"
                            value="yes"
                        /> Yes, regularly</label
                    >
                    <label
                        ><input type="radio" name="customers_call" value="no" />
                        No, rarely or never</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label for="calls_per_day"
                    >Approximately how many calls do you receive per day?</label
                >
                <input
                    type="number"
                    id="calls_per_day"
                    name="calls_per_day"
                    placeholder="e.g., 25"
                    min="0"
                />
            </div>
            <div class="form-group">
                <label for="call_reasons_common"
                    >What are the most common reasons customers call? (Optional)</label
                >
                <textarea
                    id="call_reasons_common"
                    name="call_reasons_common"
                    rows="3"
                    placeholder="e.g., Inquiries about services, booking appointments, support questions, etc."
                ></textarea>
            </div>
            <div class="form-group">
                <label>Do you miss calls?</label>
                <div class="radio-group">
                    <label
                        ><input type="radio" name="miss_calls" value="often" /> Often
                        (more than 20%)</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="miss_calls"
                            value="sometimes"
                        /> Sometimes (5-20%)</label
                    >
                    <label
                        ><input type="radio" name="miss_calls" value="rarely" />
                        Rarely (less than 5%)</label
                    >
                    <label
                        ><input type="radio" name="miss_calls" value="never" /> Never</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label for="miss_call_reasons"
                    >If you miss calls, what are the main reasons?</label
                >
                <textarea
                    id="miss_call_reasons"
                    name="miss_call_reasons"
                    rows="3"
                    placeholder="e.g., Too busy, after hours, understaffed."
                ></textarea>
            </div>
            <div class="form-group">
                <label>Do you need calls handled after business hours?</label>
                <div class="radio-group">
                    <label
                        ><input type="radio" name="after_hours" value="yes" /> Yes,
                        we get calls outside business hours</label
                    >
                    <label
                        ><input type="radio" name="after_hours" value="no" /> No,
                        we don't need after-hours support</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label>Do customers book appointments over the phone?</label>
                <div class="radio-group">
                    <label
                        ><input type="radio" name="book_phone" value="yes" /> Yes,
                        phone bookings are common</label
                    >
                    <label
                        ><input type="radio" name="book_phone" value="no" /> No,
                        bookings happen differently</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label>Do you want an AI agent to answer calls?</label>
                <div class="radio-group">
                    <label
                        ><input
                            type="radio"
                            name="ai_answer_calls"
                            value="yes"
                        /> Yes, interested in AI call answering</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="ai_answer_calls"
                            value="no"
                        /> No, prefer human answering</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label>Do you want an AI agent to call leads?</label>
                <div class="radio-group">
                    <label
                        ><input type="radio" name="ai_call_leads" value="yes" />
                        Yes, interested in AI outbound calling</label
                    >
                    <label
                        ><input type="radio" name="ai_call_leads" value="no" /> No,
                        prefer human outbound calls</label
                    >
                </div>
            </div>
        </FormSection>

        <FormSection
            step="4"
            title="Sales Process"
            description="Help us understand how you generate and manage leads, and your sales workflow."
        >
            <div class="form-group">
                <label>How do you currently get leads?</label>
                <div class="checkbox-group">
                    <label
                        ><input
                            type="checkbox"
                            name="lead_sources"
                            value="ads"
                        /> Paid ads (Google, Facebook, etc.)</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="lead_sources"
                            value="website"
                        /> Website inquiries</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="lead_sources"
                            value="social_media"
                        /> Social media</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="lead_sources"
                            value="referrals"
                        /> Referrals</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="lead_sources"
                            value="other"
                        /> Other sources</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label for="after_lead"
                    >What happens after someone becomes a lead?</label
                >
                <textarea
                    id="after_lead"
                    name="after_lead"
                    rows="3"
                    placeholder="Describe your lead follow-up process - emails, calls, meetings, etc."
                ></textarea>
            </div>
            <div class="form-group">
                <label>Do you follow up with leads?</label>
                <div class="radio-group">
                    <label
                        ><input type="radio" name="follow_up" value="yes" /> Yes,
                        we have a follow-up process</label
                    >
                    <label
                        ><input type="radio" name="follow_up" value="no" /> No, follow-up
                        is inconsistent</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label>How do you follow up?</label>
                <div class="checkbox-group">
                    <label
                        ><input
                            type="checkbox"
                            name="follow_up_methods"
                            value="phone"
                        /> Phone calls</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="follow_up_methods"
                            value="email"
                        /> Email sequences</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="follow_up_methods"
                            value="sms"
                        /> SMS/Text messages</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="follow_up_methods"
                            value="whatsapp"
                        /> WhatsApp</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label
                    >Do you want AI to qualify leads before a human talks to
                    them?</label
                >
                <div class="radio-group">
                    <label
                        ><input
                            type="radio"
                            name="ai_qualify_leads"
                            value="yes"
                        /> Yes, AI lead qualification would help</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="ai_qualify_leads"
                            value="no"
                        /> No, prefer human qualification</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label
                    >Do you want AI to automatically follow up with leads?</label
                >
                <div class="radio-group">
                    <label
                        ><input type="radio" name="ai_follow_up" value="yes" /> Yes,
                        automated follow-up would be valuable</label
                    >
                    <label
                        ><input type="radio" name="ai_follow_up" value="no" /> No,
                        prefer manual follow-up</label
                    >
                </div>
            </div>
        </FormSection>

        <FormSection
            step="5"
            title="Appointments & Scheduling"
            description="Tell us about your appointment booking process and scheduling needs."
        >
            <div class="form-group">
                <label>Do you book appointments or consultations?</label>
                <div class="radio-group">
                    <label
                        ><input
                            type="radio"
                            name="book_appointments"
                            value="yes"
                        /> Yes, appointment booking is part of our business</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="book_appointments"
                            value="no"
                        /> No, we don't book appointments</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label>How do customers book appointments?</label>
                <div class="checkbox-group">
                    <label
                        ><input
                            type="checkbox"
                            name="booking_methods"
                            value="phone"
                        /> Phone calls</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="booking_methods"
                            value="website"
                        /> Online booking system</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="booking_methods"
                            value="whatsapp"
                        /> WhatsApp</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="booking_methods"
                            value="email"
                        /> Email</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label>Do you use a calendar system?</label>
                <div class="radio-group">
                    <label
                        ><input
                            type="radio"
                            name="calendar_system"
                            value="google"
                        /> Google Calendar</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="calendar_system"
                            value="outlook"
                        /> Outlook Calendar</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="calendar_system"
                            value="calendly"
                        /> Calendly</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="calendar_system"
                            value="other"
                        /> Other calendar system</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="calendar_system"
                            value="none"
                        /> No calendar system</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label>Do you want AI to handle:</label>
                <div class="checkbox-group">
                    <label
                        ><input
                            type="checkbox"
                            name="ai_scheduling"
                            value="book"
                        /> Appointment booking</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="ai_scheduling"
                            value="reschedule"
                        /> Rescheduling appointments</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="ai_scheduling"
                            value="reminders"
                        /> Sending reminders</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="ai_scheduling"
                            value="cancel"
                        /> Cancellation handling</label
                    >
                </div>
            </div>
        </FormSection>

        <FormSection
            step="6"
            title="Business Operations"
            description="Help us identify repetitive tasks and internal processes that could be automated."
        >
            <div class="form-group">
                <label for="repetitive_tasks"
                    >What repetitive tasks does your team do every day?</label
                >
                <textarea
                    id="repetitive_tasks"
                    name="repetitive_tasks"
                    rows="4"
                    placeholder="e.g., Sending follow-up emails, updating spreadsheets, data entry, social media posting, etc."
                ></textarea>
            </div>
            <div class="form-group">
                <label for="time_consuming_tasks"
                    >What tasks take the most time?</label
                >
                <textarea
                    id="time_consuming_tasks"
                    name="time_consuming_tasks"
                    rows="4"
                    placeholder="Describe the tasks that consume the most hours of your team's day."
                ></textarea>
            </div>
            <div class="form-group">
                <label>Do you have internal processes that involve:</label>
                <div class="checkbox-group">
                    <label
                        ><input
                            type="checkbox"
                            name="internal_processes"
                            value="data_moving"
                        /> Moving data between systems</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="internal_processes"
                            value="emails"
                        /> Sending emails or notifications</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="internal_processes"
                            value="reports"
                        /> Creating reports</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="internal_processes"
                            value="crm_updates"
                        /> Updating CRM records</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="internal_processes"
                            value="task_assignment"
                        /> Assigning tasks to team members</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label>Do you want to automate internal workflows?</label>
                <div class="radio-group">
                    <label
                        ><input
                            type="radio"
                            name="automate_workflows"
                            value="yes"
                        /> Yes, we'd like to automate internal processes</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="automate_workflows"
                            value="no"
                        /> No, we're focused on customer-facing automation</label
                    >
                </div>
            </div>
        </FormSection>

        <FormSection
            step="7"
            title="Current Tools"
            description="Tell us about the software and tools your business currently uses. This helps us plan integrations."
        >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="form-group">
                    <label for="crm">CRM System</label>
                    <input
                        type="text"
                        id="crm"
                        name="crm"
                        placeholder="e.g., Salesforce, HubSpot, Pipedrive, Zoho"
                    />
                </div>
                <div class="form-group">
                    <label for="booking_system"
                        >Booking/Appointment System</label
                    >
                    <input
                        type="text"
                        id="booking_system"
                        name="booking_system"
                        placeholder="e.g., Calendly, Acuity, Bookwhen"
                    />
                </div>
                <div class="form-group">
                    <label for="email_platform">Email Platform</label>
                    <input
                        type="text"
                        id="email_platform"
                        name="email_platform"
                        placeholder="e.g., Gmail, Outlook, SendGrid, Mailchimp"
                    />
                </div>
                <div class="form-group">
                    <label for="sms_platform">SMS/Text Platform</label>
                    <input
                        type="text"
                        id="sms_platform"
                        name="sms_platform"
                        placeholder="e.g., Twilio, MessageBird, SimpleTexting"
                    />
                </div>
                <div class="form-group">
                    <label for="project_management"
                        >Project Management Tool</label
                    >
                    <input
                        type="text"
                        id="project_management"
                        name="project_management"
                        placeholder="e.g., Trello, Asana, ClickUp, Monday.com"
                    />
                </div>
            </div>
            <div class="form-group">
                <label for="other_tools">Other tools your business uses</label>
                <textarea
                    id="other_tools"
                    name="other_tools"
                    rows="3"
                    placeholder="List any other software, apps, or tools your team uses regularly."
                ></textarea>
            </div>
        </FormSection>

        <FormSection
            step="8"
            title="Automation Goals"
            description="Tell us what you want to achieve with automation and which AI capabilities interest you most."
        >
            <div class="form-group">
                <label for="automate_first"
                    >What do you want to automate first?</label
                >
                <textarea
                    id="automate_first"
                    name="automate_first"
                    rows="3"
                    placeholder="e.g., Customer inquiries, appointment booking, lead follow-up, etc."
                ></textarea>
            </div>
            <div class="form-group">
                <label for="save_time"
                    >What would save your team the most time?</label
                >
                <textarea
                    id="save_time"
                    name="save_time"
                    rows="3"
                    placeholder="Describe the biggest time-wasters in your current workflow."
                ></textarea>
            </div>
            <div class="form-group">
                <label for="increase_revenue"
                    >What would increase your revenue the most?</label
                >
                <textarea
                    id="increase_revenue"
                    name="increase_revenue"
                    rows="3"
                    placeholder="How could automation help you generate more sales or improve conversion rates?"
                ></textarea>
            </div>
            <div class="form-group">
                <label>Are you interested in:</label>
                <div class="checkbox-group">
                    <label
                        ><input
                            type="checkbox"
                            name="ai_interests"
                            value="voice_agent"
                        /> Receptionist Agent</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="ai_interests"
                            value="sales_agent"
                        /> Sales Agent</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="ai_interests"
                            value="support_agent"
                        /> Support Agent</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="ai_interests"
                            value="content_agent"
                        /> Content Agent</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="ai_interests"
                            value="social_media_agent"
                        /> AI Social Media Agent</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="ai_interests"
                            value="internal_assistant"
                        /> AI Internal Assistant</label
                    >
                    <label
                        ><input
                            type="checkbox"
                            name="ai_interests"
                            value="custom_agent"
                        /> Custom AI Agent</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label for="ai_description"
                    >Describe what you want the AI to do.</label
                >
                <textarea
                    id="ai_description"
                    name="ai_description"
                    rows="4"
                    placeholder="Provide more details about how you envision AI helping your business."
                ></textarea>
            </div>
        </FormSection>

        <FormSection
            step="9"
            title="Usage Estimation"
            description="Help us estimate your automation needs and technical requirements."
        >
            <div class="form-group">
                <label for="estimated_calls">Estimated calls per day:</label>
                <input
                    type="number"
                    id="estimated_calls"
                    name="estimated_calls"
                    placeholder="e.g., 25"
                    min="0"
                />
            </div>
            <div class="form-group">
                <label>Average call duration:</label>
                <div class="radio-group">
                    <label
                        ><input type="radio" name="call_duration" value="1-3" />
                        1–3 minutes</label
                    >
                    <label
                        ><input type="radio" name="call_duration" value="3-5" />
                        3–5 minutes</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="call_duration"
                            value="5-10"
                        /> 5–10 minutes</label
                    >
                    <label
                        ><input type="radio" name="call_duration" value="10+" />
                        10+ minutes</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label
                    >Do you need inbound calls, outbound calls, or both?</label
                >
                <div class="radio-group">
                    <label
                        ><input type="radio" name="call_type" value="inbound" />
                        Inbound calls only</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="call_type"
                            value="outbound"
                        /> Outbound calls only</label
                    >
                    <label
                        ><input type="radio" name="call_type" value="both" /> Both
                        inbound and outbound</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label>Do you need SMS automation?</label>
                <div class="radio-group">
                    <label
                        ><input
                            type="radio"
                            name="sms_automation"
                            value="yes"
                        /> Yes, SMS messaging would be helpful</label
                    >
                    <label
                        ><input type="radio" name="sms_automation" value="no" />
                        No, not needed</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label>Do you need email automation?</label>
                <div class="radio-group">
                    <label
                        ><input
                            type="radio"
                            name="email_automation"
                            value="yes"
                        /> Yes, automated email sequences</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="email_automation"
                            value="no"
                        /> No, manual emails are sufficient</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label>Do you need CRM integration?</label>
                <div class="radio-group">
                    <label
                        ><input
                            type="radio"
                            name="crm_integration"
                            value="yes"
                        /> Yes, integrate with our CRM</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="crm_integration"
                            value="no"
                        /> No, CRM integration not needed</label
                    >
                </div>
            </div>
        </FormSection>

        <FormSection
            step="10"
            title="Project Planning"
            description="Let's discuss timing and budget to ensure the solution fits your business needs."
        >
            <div class="form-group">
                <label>When do you want to start?</label>
                <div class="radio-group">
                    <label
                        ><input
                            type="radio"
                            name="start_timeline"
                            value="immediately"
                        /> Immediately - ready to implement</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="start_timeline"
                            value="1_month"
                        /> Within 1 month</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="start_timeline"
                            value="3_months"
                        /> Within 3 months</label
                    >
                    <label
                        ><input
                            type="radio"
                            name="start_timeline"
                            value="exploring"
                        /> Just exploring options</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label>Monthly budget for automation:</label>
                <div class="radio-group">
                    <label
                        ><input type="radio" name="budget" value="200-500" /> $200–$500
                        per month</label
                    >
                    <label
                        ><input type="radio" name="budget" value="500-1000" /> $500–$1000
                        per month</label
                    >
                    <label
                        ><input type="radio" name="budget" value="1000-3000" /> $1000–$3000
                        per month</label
                    >
                    <label
                        ><input type="radio" name="budget" value="3000+" /> $3000+
                        per month</label
                    >
                </div>
            </div>
            <div class="form-group">
                <label for="additional_info"
                    >Anything else we should know?</label
                >
                <textarea
                    id="additional_info"
                    name="additional_info"
                    rows="4"
                    placeholder="Share any additional context, challenges, or requirements that would help us create the best automation plan for your business."
                ></textarea>
            </div>
        </FormSection>

        <div class="submit-section">
            <h3 class="text-4xl font-bold mb-6">
                Ready to Transform Your Business?
            </h3>
            <p class="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
                Submit your assessment and we'll create a custom automation plan
                tailored to your needs.
            </p>
            <button
                type="submit"
                class="bg-white text-[#37352f] px-12 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors"
            >
                🚀 Submit Assessment
            </button>
        </div>
    </form>
</main>
