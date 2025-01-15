import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Message{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    conversationId: number; // ID-ul conversației de care aparține mesajul
  
    @Column()
    content: string; // Conținutul mesajului
}