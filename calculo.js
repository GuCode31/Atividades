const maxalunos = 14;
for(let aluno=0;aluno<=maxalunos;aluno++)
{
 if (aluno == 0) 
 {
    console.log("O número " + aluno + " é zero");   
 }  
    else if (aluno%2 == 0)
    {
     console.log("O número " + aluno + " " + "par");  
    }
    else
    {
     console.log("O número " + aluno +" " +"ímpar");   
    }
}