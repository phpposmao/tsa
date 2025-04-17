// @ts-nocheck
"use server"

import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASSWORD,
  }
} as SMTPTransport.Options);

export async function sendContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const surname = formData.get("surname") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // For demonstration purposes, we're just logging the data
    console.log("Sending contact form data to tsa@tsaacademy.com.br:")
    console.log({ name, surname, email, phone, company, message })

    await transporter.sendMail({
      from: '"TSA Formulários" <tsa@tsaacademy.com.br>',
      to: "alex@tsacomunica.com.br",
      subject: `Novo Lead TSA Website: ${name} ${surname}`,
      text: `
        Nome: ${name} ${surname}
        Email: ${email}
        Telefone: ${phone}
        Empresa: ${company}
        Mensagem: ${message}
      `,
      html: `
        <h2>Novo contato do site</h2>
        <p><strong>Nome:</strong> ${name} ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    return { success: true, message: "Mensagem enviada com sucesso!" }
  } catch (error) {
    console.error("Error sending contact form:", error)
    return { success: false, message: `Erro ao enviar mensagem. Por favor, tente novamente.` }
  }
}

export async function sendJobApplication(formData: FormData) {
  try {
    // Extract all form data
    const formValues: Record<string, string> = {}
    formData.forEach((value, key) => {
      formValues[key] = value as string
    })

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const endereco = formData.get("endereco") as string
    const experience = formData.get("experience") as string
    const currentRole = formData.get("currentRole") as string
    const education = formData.get("education") as string
    const linkedin = formData.get("linkedin") as string
    const portfolio = formData.get("portfolio") as string
    const pcd = formData.get("pcd") as string
    const skills = formData.get("skills") as string
    const languages = formData.get("languages") as string
    const tools = formData.get("tools") as string
    const area = formData.get("area") as string
    const areaOps = formData.get("areaOps") as string
    const motivation = formData.get("motivation") as string
    const salary = formData.get("salary") as string
    const availability = formData.get("availability") as string
    const porque = formData.get("porque") as string
    const resume = formData.get("resume") as string
    const curriculo = formData.get("curriculo")

    await transporter.sendMail({
      from: '"TSA Formulários" <tsa@tsaacademy.com.br>',
      to: "bia.lavs@tsacomunica.com.br",
      subject: `Novo Currículo TSA Website: ${name}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        Endereço: ${endereco}
        Linkedin: ${linkedin}
        Portfólio: ${portfolio}
        PCD: ${pcd}
        Habilidades: ${skills}
        Linguas: ${languages}
        Ferramentas: ${tools}
        Area: ${availability}
        Area(Outras): ${salary}
        Por que a TSA?: ${porque}
      `,
      attachments: [
        {
          filename: "curriculo.pdf",
          contentType: "application/pdf",
          content: curriculo
        }
      ],
      html: `
        <h2>Currículo - Faça Parte - do site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>experience:</strong> ${experience}</p>
        <p><strong>Cargo Atual:</strong> ${currentRole}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Linkedin:</strong> ${linkedin}</p>
        <p><strong>Portfólio:</strong> ${portfolio}</p>
        <p><strong>PCD:</strong> ${pcd}</p>
        <p><strong>Habilidades:</strong> ${skills}</p>
        <p><strong>Linguas:</strong> ${languages}</p>
        <p><strong>Ferramentas:</strong> ${tools}</p>
        <p><strong>Area:</strong> ${area}</p>
        <p><strong>Area(Outras):</strong> ${areaOps}</p>
        <p><strong>Motivação:</strong> ${motivation}</p>
        <p><strong>Salário Desejado:</strong> ${salary}</p>
        <p><strong>Disponibilidade:</strong> ${availability}</p>
        <p><strong>Por que a TSA?:</strong> ${porque}</p>
      `,
    });

    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    console.log("Sending job application to tsa@tsaacademy.com.br:")
    console.log(formValues)

    // Here you would add your email sending logic similar to the contact form

    return { success: true, message: "Candidatura enviada com sucesso!" }
  } catch (error) {
    console.error("Error sending job application:", error)
    return { success: false, message: "Erro ao enviar candidatura. Por favor, tente novamente." }
  }
}

export async function sendFormResults(formData: Record<string, any>, formType: string, score: number, result: any) {
  try {
    // Format the answers for email
    let answersHtml = ""
    for (const [key, value] of Object.entries(formData)) {
      if (Array.isArray(value)) {
        answersHtml += `<p><strong>${key}:</strong> ${value.join(", ")}</p>`
      } else {
        answersHtml += `<p><strong>${key}:</strong> ${value}</p>`
      }
    }

    // Prepare email content
    const mailOptions = {
      from: '"TSA Formulários" <tsa@tsaacademy.com.br>',
      to: "tsa@tsaacademy.com.br", // Replace with recipient email
      subject: `Resultado do Formulário de ${formType}: ${result.title}`,
      html: `
        <h1>Resultado do Formulário de ${formType}</h1>
        <h2>${result.title}</h2>
        <p>${result.description}</p>
        
        <h3>Recomendações:</h3>
        <ul>
          ${result.recommendations.map((rec: string) => `<li>${rec}</li>`).join("")}
        </ul>
        
        <h3>Pontuação:</h3>
        <p>${score} pontos</p>
        
        <h3>Respostas do Usuário:</h3>
        ${answersHtml}
      `,
    }
  
    await transporter.sendMail(mailOptions);

    return { success: true, message: "Resultados enviados com sucesso!" }
  } catch (error) {
    console.error("Error sending form results:", error)
    return { success: false, message: "Erro ao enviar resultados. Por favor, tente novamente." }
  }
}