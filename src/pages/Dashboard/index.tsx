import React, {useState, useMemo} from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import listOfMonths from '../../utils/months';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';
import opsImg from '../../assets/ops.svg';


import {Container, Content} from './styles';

const Dashboard: React.FC = () => {

  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

  const years = useMemo(() => {
      let uniqueYears: number[] = [];


      [...expenses, ...gains].forEach(item => {
          const date = new Date(item.date);
          const year = date.getFullYear();
          const FullYear = new Date().getFullYear();
          if(!uniqueYears.includes(year)){
              uniqueYears.push(year)
          }
          if(!uniqueYears.includes(FullYear)){
            uniqueYears.push(FullYear)
          }
      });

      return uniqueYears.map(year => {
          return {
              value: year,
              label: year,
          }
      });
  },[]);


  const months = useMemo(() => {
      return listOfMonths.map((month, index) => {
          return {
              value: index + 1,
              label: month,
          }
      });
  },[]);

  const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected){
                try{
                    total += Number(item.amount)
                }catch{
                    throw new Error('Invalid amount! Amount must be number.')
                }
            }
        });

        return total;
    },[monthSelected, yearSelected]);


    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected){
                try{
                    total += Number(item.amount)
                }catch{
                    throw new Error('Invalid amount! Amount must be number.')
                }
            }
        });

        return total;
    },[monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    },[totalGains, totalExpenses]);

  const message = useMemo(() => {
        if(totalBalance < 0){
            return {
                title: "Que triste!",
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
                icon: sadImg
            }
        }      
        else if(totalGains === 0 && totalExpenses === 0){
            return {
                title: "Op's!",
                description: "Neste mês, não há registros de entradas ou saídas.",
                footerText: "Parece que você não fez nenhum registro no mês e ano selecionado.",
                icon: opsImg
            }
        }
        else if(totalBalance === 0){
            return {
                title: "Ufaa!",
                description: "Neste mês, você gastou exatamente o que ganhou.",
                footerText: "Tenha cuidado. No próximo tente poupar o seu dinheiro.",
                icon: grinningImg
            }
        }
        else{
            return {
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investir o seu saldo.",
                icon: happyImg
            }
        }

    },[totalBalance, totalGains, totalExpenses]);

  const handleMonthSelected = (month: string) => {
      try {
          const parseMonth = Number(month);
          setMonthSelected(parseMonth);
      }
      catch{
          throw new Error('invalid month value. Is accept 0 - 24.')
      }
  }

  const handleYearSelected = (year: string) => {
      try {
          const parseYear = Number(year);
          setYearSelected(parseYear);
      }
      catch{
          throw new Error('invalid year value. Is accept integer numbers.')
      }
  }

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput 
            options={months}
            onChange={(e) => handleMonthSelected(e.target.value)} 
            defaultValue={monthSelected}
        />
        <SelectInput 
            options={years} 
            onChange={(e) => handleYearSelected(e.target.value)} 
            defaultValue={yearSelected}
        />
      </ContentHeader>
      <Content>
        <WalletBox 
            title="Saldo"
            color="#4E41F0"
            amount={totalBalance}
            footerlabel="atualizado com base nas entradas e saídas"
            icon="dolar"
        />

        <WalletBox 
            title="Entradas"
            color="#F7931B"
            amount={totalGains}
            footerlabel="atualizado com base nas entradas e saídas"
            icon="arrowUp"
        />

        <WalletBox 
            title="Saídas"
            color="#E44C4E"
            amount={totalExpenses}
            footerlabel="atualizado com base nas entradas e saídas"
            icon="arrowDown"
        />

        <MessageBox
            title={message.title}
            description={message.description}
            footerText={message.footerText}
            icon={message.icon}
        />
      </Content>
    </Container>
  );
}

export default Dashboard;